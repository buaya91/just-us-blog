import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import store from './top_level/store'
import allActions from './top_level/actions'
import routes from './top_level/routes'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  createElementWithActions(Element, props) {
    return (
      <Element {...props} actions={bindActionCreators(allActions, store.dispatch)} />
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
          <Router
            history={browserHistory}
            children={routes}
            createElement={::this.createElementWithActions}
          />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
