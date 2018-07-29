import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, H1, Label, Button, showMessage, Dropdown } from 'components'
import Input, { MaskedInput } from 'components/input'
import { assoc, isEmpty, join, defaultTo } from 'ramda'
import validate from './validation'
import measurementUnits from './measurementUnits'
import { newId } from 'common'
import { createNumberMask } from 'common/masks'
import { create } from 'api/products'
import styles from './styles.styl'
const MASK = createNumberMask({ prefix: 'R$', thousandsSeparatorSymbol: '.', allowDecimal: true, decimalSymbol: ',' })

class CreateProduct extends Component {
  state = {
    showAlert: false,
    errorMessage: '',
    product: {
      id: null,
      name: '',
      amount: 0,
      price: null,
      measurementUnit: 'Unit'
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

    var defaultToId = defaultTo(newId())
    const { product } = this.state
    const selectedUnit = measurementUnits.find(unit => unit.name === product.measurementUnit)
    create({ ...product, id: defaultToId(product.id), amount: selectedUnit.convert(product.amount) })
    showMessage('Success', 'Your product was stored successfully!', 'success')
  }

  redirectToProductsPage () {
    const { history } = this.props

    history.push('/products')
  }

  render () {
    return (
      <Fragment>
        <H1>Create a product</H1>
        <Form onSubmit={() => this.storeProduct()}>
          <div className='form-row'>
            <div className='col-md-4 mb-3'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                placeholder='Name'
                value={this.state.product.name}
                onChange={name => this.handleChange('name', name)}
                required
                maxLength={50} />
            </div>
            <div className='col-md-4 mb-3'>
              <Label>Measurement units</Label>
              <Dropdown
                selected={this.state.product.measurementUnit}
                items={measurementUnits.map(unit => unit.name)}
                onChange={unit => this.handleChange('measurementUnit', unit)} />
            </div>
            <div className='col-md-4 mb-3'>
              <Label htmlFor='amount'>Amount</Label>
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
              <Label htmlFor='price'>Price</Label>
              <MaskedInput
                required
                mask={MASK}
                id='price'
                value={this.state.product.price}
                onChange={price => this.handleChange('price', price)} />
            </div>
            <div className='col-md-4 mb-3'>
              <Label htmlFor='expiryDate'>Expiry date</Label>
              <Input id='expiryDate' placeholder='Expiry date' required />
            </div>
            <div className='col-md-4 mb-3'>
              <Label htmlFor='manufactureDate'>Manufacture date</Label>
              <Input id='manufactureDate' placeholder='Manufacture date' required />
            </div>
          </div>
          <Button type='button' className='btn btn-danger' onClick={() => this.redirectToProductsPage()}>Cancel</Button>
          <Button className={`btn btn-success ${styles.createButton}`}>Create</Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(CreateProduct)
