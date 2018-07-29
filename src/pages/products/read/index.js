import React, { Component, Fragment } from 'react'
import Table from './Table'
import { get as getProducts } from 'api/products'

class ReadProducts extends Component {
  state = {
    products: []
  }

  componentDidMount () {
    this.setState({ products: getProducts() })
  }

  redirectToEditPage (productId) {

  }

  delete (productId) {

  }

  render () {
    return (
      <Fragment>
        <h1>Products</h1>
        <Table
          onEdit={productId => this.redirectToEditPage(productId)}
          onDelete={productId => this.delete(productId)}
          products={this.state.products}
        />
      </Fragment>
    )
  }
}

export default ReadProducts
