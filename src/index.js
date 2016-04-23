import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import HomePageContainer from './top_level/homepage/HomePageContainer'
import { Provider } from 'react-redux'
import store from './store'
import actions from './actions'

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomePageContainer} />
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
