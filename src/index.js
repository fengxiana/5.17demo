import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import './index.less'
import { Provider } from 'react-redux'
import { store } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)


