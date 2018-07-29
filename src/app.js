import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReadProducts from './pages/products/read'
import StoreProduct from './pages/products/store'
import Layout from './layout'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => (
        <Layout>
          <ReadProducts {...props} />
        </Layout>
      )} />
      <Route path='/products' render={props => (
        <Layout>
          <ReadProducts {...props} />
        </Layout>
      )} />
      <Route path='/storeProduct' render={props => (
        <Layout>
          <StoreProduct {...props} />
        </Layout>
      )} />
    </Switch>
  </BrowserRouter>
)

export default App
