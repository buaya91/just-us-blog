import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import store from './top_level/store'
import allActions from './top_level/actions'
import routes from './top_level/routes'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { fade } from 'material-ui/utils/colorManipulator'
import * as colors from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

const theme = getMuiTheme({
  palette: {
    primary1Color: colors.orange500,
    primary2Color: colors.purple500,
    primary3Color: colors.green500,
    accent1Color: colors.pink500,
    accent2Color: colors.pinkA400,
    accent3Color: colors.pinkA100,
    // textColor: colors.fullWhite,
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
