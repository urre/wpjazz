import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import AOS from 'aos';

AOS.init({
	disable: 'mobile'
});

require('./css/styles.css')

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
  ), document.getElementById('main'))
