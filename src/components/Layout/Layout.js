import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'

import AppContext from '../../context/appContext'
import { CustomSpinner } from '../CustomSpinner/CustomSpinner'
import { Header } from '../Header/Header'

export const Layout = ({ children }) => {
  const appContext = useContext(AppContext)

  const { loading, error } = appContext

  return (
    <div>
      {loading && <CustomSpinner />}
      {error.length ? <Alert variant="danger">{error}</Alert> : null}

      <Header />
      {children}
    </div>
  )
}
