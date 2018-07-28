import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReadProducts from './pages/products/read'
import CreateProducts from './pages/products/create'
import Layout from './layout'

class Router extends PureComponent {
  render () {
    const { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
    )
  }
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Router exact path='/' component={ReadProducts} />
      <Router path='/products' component={ReadProducts} />
      <Router path='/newProduct' component={CreateProducts} />
    </Switch>
  </BrowserRouter>
)

export default App
