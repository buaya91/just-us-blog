import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import BlogPost from './blogpost/BlogPost'
import { Provider } from 'react-redux'
import store from './store'
import actions from './actions'

const App = () => (
  <Provider store={store}>
    <div>Placeholder</div>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
