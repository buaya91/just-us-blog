import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import store from './top-level/store'
import allActions from './top-level/actions'
import routes from './top-level/routes'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as colors from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

export const theme = getMuiTheme({
  palette: {
    primary1Color: colors.orange500,
    primary2Color: colors.orange700,
    primary3Color: colors.orange300,
    accent1Color: colors.pink500,
    accent2Color: colors.pink700,
    accent3Color: colors.pink300,
    textColor: colors.blueGrey900,
    // alternateTextColor: colors.fullWhite,
  },
})

class App extends Component {
  createElementWithActions(Element, props) {
    return (
      <Element {...props} actions={bindActionCreators(allActions, store.dispatch)} />
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
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
