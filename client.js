import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store.js'
import Layout from './components/Layout.jsx'
import Xbl from './components/pages/Xbl.jsx'
import SideBar from './components/pages/SideBar.jsx'
// import Testcomponent from './components/pages/Testcomponent.jsx'

require('./main.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Xbl}>
        <Route component = {SideBar}></Route>
      </Route>
    </Router>
  </Provider>,
document.getElementById('app'))
