import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store.js'
import Layout from './components/Layout.jsx'
import Xbl from './components/pages/Xbl.jsx'
// import Testcomponent from './components/pages/Testcomponent.jsx'

require('./main.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Xbl}>
        </IndexRoute>
      </Route>
    </Router>
  </Provider>,
document.getElementById('app'))
