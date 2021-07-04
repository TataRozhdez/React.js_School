import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import { store } from './init/store'
import history from './services/history'
import { Routes } from './routes'

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
