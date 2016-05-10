import { createStore, compose, applyMiddleware } from 'redux'
import { createMiddleware, createLoader } from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'
import filter from 'redux-storage-decorator-filter'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware(
  sagas.fetchAllPost,
  sagas.watchPostActions,
  sagas.watchLoginRequest,
  sagas.watchUIState
)

const localStorageEngine = createEngine('just-us')
const filteredEngine = filter(localStorageEngine, [], ['login', 'showPopUp'])
const localStorageMiddleware = createMiddleware(filteredEngine)

const devtoolCreateStore = compose(
  applyMiddleware(sagaMiddleware, localStorageMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const finalStore = devtoolCreateStore(reducers)

createLoader(localStorageEngine)(finalStore)

export default finalStore
