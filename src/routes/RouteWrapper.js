import React from 'react'
import { Route } from 'react-router-dom'

import { Layout } from '../components/Layout/Layout'

export const RouteWrapper = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)
