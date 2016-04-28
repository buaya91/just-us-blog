import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware(sagas.fetchAllPost, sagas.watchAllPostRequested, sagas.watchLoginRequest)

const devtoolCreateStore = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const finalStore = devtoolCreateStore(reducers)

export default finalStore
