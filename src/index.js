import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

require('./css/styles.css')

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
  ), document.getElementById('main'))
