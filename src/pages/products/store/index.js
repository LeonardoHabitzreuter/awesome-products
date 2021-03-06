import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, H1, Label, Button, showMessage, Dropdown, Boolean } from 'components'
import Input, { MaskedInput } from 'components/input'
import { assoc, isEmpty, join } from 'ramda'
import validate from './validation'
import measurementUnits from './measurementUnits'
import { createNumberMask } from 'common/masks'
import { getById, create, update } from 'api/products'
import styles from './styles.styl'
const PRICE_MASK = createNumberMask({ prefix: 'R$', thousandsSeparatorSymbol: '.', allowDecimal: true, decimalSymbol: ',' })

class StoreProduct extends Component {
  constructor (props) {
    super(props)
    const editMode = !!props.location.state && props.location.state.editProduct
    const editProduct = editMode ? getById(props.location.state.editProduct) : null

    this.state = {
      showAlert: false,
      errorMessage: '',
      product: editProduct || {
        id: null,
        perishable: false,
        name: '',
        amount: 0,
        price: null,
        measurementUnit: 'Unit',
        expiryDate: null,
        manufactureDate: null
      }
    }
  }

  handleChange (prop, value) {
    this.setState({ product: assoc(prop, value, this.state.product) })
  }

  storeProduct () {
    const errors = validate(this.state.product)
    if (!isEmpty(errors)) {
      return showMessage('Oops!', join('\r\n')(errors), 'error')
    }

    const selectedUnit = measurementUnits.find(unit => unit.name === this.state.product.measurementUnit)
    const product = { ...this.state.product, amount: selectedUnit.convert(this.state.product.amount) }

    if (product.id) {
      update(product)
    } else {
      create(product)
    }

    showMessage('Success', 'Your product was stored successfully!', 'success')
  }

  redirectToProductsPage () {
    const { history } = this.props

    history.push('/products')
  }

  render () {
    return (
      <Fragment>
        <H1>Store your product</H1>
        <Form onSubmit={() => this.storeProduct()}>
          <div className='form-row'>
            <div className='col-md-12 mb-3'>
              <Label className={styles.labelsSize} htmlFor='perishable'>Perishable</Label>
              <Boolean
                id='perishable'
                value={this.state.product.perishable}
                onChange={perishable => this.handleChange('perishable', perishable)} />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-4 mb-3'>
              <Label className={styles.labelsSize} htmlFor='name'>Name</Label>
              <Input
                id='name'
                placeholder='Name'
                value={this.state.product.name}
                onChange={name => this.handleChange('name', name)}
                required
                maxLength={50} />
            </div>
            <div className='col-md-4 mb-3'>
              <Label className={styles.labelsSize}>Measurement units</Label>
              <Dropdown
                selected={this.state.product.measurementUnit}
                items={measurementUnits.map(unit => unit.name)}
                onChange={unit => this.handleChange('measurementUnit', unit)} />
            </div>
            <div className='col-md-4 mb-3'>
              <Label className={styles.labelsSize} htmlFor='amount'>Amount</Label>
              <div className='input-group mb-3'>
                <Input
                  type='number'
                  id='amount'
                  value={this.state.product.amount}
                  onChange={amount => this.handleChange('amount', amount)} />
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='measurement'>{
                    measurementUnits.find(unit => unit.name === this.state.product.measurementUnit).acronym
                  }</span>
                </div>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-4 mb-3'>
              <Label className={styles.labelsSize} htmlFor='price'>Price</Label>
              <MaskedInput
                required
                mask={PRICE_MASK}
                id='price'
                value={this.state.product.price}
                onChange={price => this.handleChange('price', price)} />
            </div>
            <div className='col-md-4 mb-3'>
              <Label className={styles.labelsSize} htmlFor='expiryDate'>Expiry date</Label>
              <Input
                id='expiryDate'
                type='date'
                value={this.state.product.expiryDate}
                onChange={expiryDate => this.handleChange('expiryDate', expiryDate)}
                required={this.state.product.perishable} />
            </div>
            <div className='col-md-4 mb-3'>
              <Label className={styles.labelsSize} htmlFor='manufactureDate'>Manufacture date</Label>
              <Input
                id='manufactureDate'
                type='date'
                required
                max={this.state.product.expiryDate}
                value={this.state.product.manufactureDate}
                onChange={manufactureDate => this.handleChange('manufactureDate', manufactureDate)} />
            </div>
          </div>
          <Button type='button' className='btn btn-danger' onClick={() => this.redirectToProductsPage()}>Cancel</Button>
          <Button className={`btn btn-success ${styles.createButton}`}>Store</Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(StoreProduct)
