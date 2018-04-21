import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'
import App from './components/App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
)

