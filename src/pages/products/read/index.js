import React, { Component, Fragment } from 'react'
import Table from './table'
import { Button, showMessage } from 'components'
import { get as getProducts, remove as deleteProduct } from 'api/products'
import { Redirect } from 'react-router-dom'
import Styles from './styles.styl'

class ReadProducts extends Component {
  state = {
    redirectToForm: false,
    editProduct: null,
    products: []
  }

  componentDidMount () {
    this.setState({ products: getProducts() })
  }

  redirectToEditPage (editProduct) {
    this.setState({ redirectToForm: true, editProduct })
  }

  redirectToCreatePage () {
    this.setState({ redirectToForm: true })
  }

  delete (productId) {
    showMessage({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete the product?',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
    .then(willDelete => {
      if (willDelete) {
        deleteProduct(productId)
        this.setState({ products: this.state.products.filter(product => product.id !== productId) })
      }
    })
  }

  render () {
    return (
      this.state.redirectToForm ? (
        <Redirect to={{
          pathname: 'storeProduct',
          state: {
            editProduct: this.state.editProduct
          }
        }} />
      ) : (
        <Fragment>
          <h1>Products</h1>
          <Button type='button' className={`btn btn-primary ${Styles.buttonMargin}`} onClick={() => this.redirectToCreatePage()}>Create a new product</Button>
          <Table
            onEdit={productId => this.redirectToEditPage(productId)}
            onDelete={productId => this.delete(productId)}
            products={this.state.products}
          />
        </Fragment>
      )
    )
  }
}

export default ReadProducts
