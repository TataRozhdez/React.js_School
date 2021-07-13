import React from 'react'
import { Redirect, Switch } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { OrderPage } from '../pages/OrderPage'
import { ProductPage } from '../pages/ProductPage'
import { RouteWrapper } from './RouteWrapper'

export const Routes = () => (
  <Switch>
    <RouteWrapper path="/" exact component={HomePage} />
    <RouteWrapper path="/product/:id" exact component={ProductPage} />
    <RouteWrapper path="/cart" exact component={OrderPage} />
    <Redirect to="/" />
  </Switch>
)
