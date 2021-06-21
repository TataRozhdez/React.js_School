import React from 'react'
import { Router } from 'react-router'

import history from './services/history'
import AppState from './context/AppState'
import { Routes } from './routes'

const App = () => {
  return (
    <AppState>
      <Router history={history}>
        <Routes />
      </Router>
    </AppState>
  )
}

export default App
