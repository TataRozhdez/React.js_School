import React from 'react'
import { Redirect, Switch } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { OrderPage } from '../pages/OrderPage'
import { ProductPage } from '../pages/ProductPage'
import { RouteWrapper } from './RouteWrapper'
import { UploadedProdPage } from '../pages/UploadedProdPage'
import { ArchivePage } from './../pages/ArchivePage'
import { OrderedProdPage } from '../pages/OrderedProdPage'

export const Routes = () => (
  <Switch>
    <RouteWrapper
      path="/products/uploaded"
      exact
      component={UploadedProdPage}
    />
    <RouteWrapper path="/product/:id" exact component={ProductPage} />

    <RouteWrapper path="/archive" exact component={ArchivePage} />
    <RouteWrapper path="/archive/:id" exact component={OrderedProdPage} />

    <RouteWrapper path="/cart" exact component={OrderPage} />
    <RouteWrapper path="/" exact component={HomePage} />
    <Redirect to="/" />
  </Switch>
)
