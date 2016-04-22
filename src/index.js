import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import BlogPost from './blogpost/BlogPost'
import { Provider } from 'react-redux'
import store from './store'
import actions from './actions'

const App = () => (
  <Provider store={store}>
    <BlogPost
      actions={bindActionCreators(actions, store.dispatch)} title="Big title"
      content="<p>A paragraph</p>"
    />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
