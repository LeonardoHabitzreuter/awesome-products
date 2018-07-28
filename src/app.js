import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReadProducts from './pages/products/read'
import CreateProducts from './pages/products/create'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' component={ReadProducts} />
      <Route path='/products' component={ReadProducts} />
      <Route path='/products/new' component={CreateProducts} />
    </Switch>
  </Router>
)

export default App
