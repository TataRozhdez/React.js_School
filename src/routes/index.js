import React from 'react'
import { Redirect, Switch } from 'react-router-dom'

import { RouteWrapper } from './RouteWrapper'
import { Main } from '../modules/Main/Main'
import { Cart } from '../modules/Cart/Cart'

export const Routes = () => {
  return (
    <div>
      <Switch>
        <RouteWrapper path='/' exact component={Main} />
        <RouteWrapper path='/cart' exact component={Cart} />

        <Redirect to='/' />
      </Switch>
    </div>
  )
}
