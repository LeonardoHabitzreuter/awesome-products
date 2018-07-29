import React, { Component, Fragment } from 'react'
import Table from './Table'
import { showMessage } from 'components'
import { get as getProducts, remove as deleteProduct } from 'api/products'
import { Redirect } from 'react-router-dom'

class ReadProducts extends Component {
  state = {
    editProduct: null,
    products: []
  }

  componentDidMount () {
    this.setState({ products: getProducts() })
  }

  redirectToEditPage (productId) {
    this.setState({ editProduct: productId })
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
      !this.state.editProduct ? (
        <Fragment>
          <h1>Products</h1>
          <Table
            onEdit={productId => this.redirectToEditPage(productId)}
            onDelete={productId => this.delete(productId)}
            products={this.state.products}
          />
        </Fragment>
      ) : (
        <Redirect to={{
          pathname: 'newProduct',
          state: {
            editProduct: this.state.editProduct
          }
        }} />
      )
    )
  }
}

export default ReadProducts
