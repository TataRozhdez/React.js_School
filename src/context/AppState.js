import React, { useReducer } from 'react'

import appReducer from './appReducer'
import AppContext from './appContext'
import {
  LOADING,
  ERROR,
  GET_PRODUCTS,
  GET_PRODUCT_INFO,
  CHANGE_PAGE,
  CHANGE_ORDER_LIST,
  SET_TOTAL_ORDERS,
} from './types'
import { getProductIDApi, getProductsApi } from '../api/helpers'

const AppState = (props) => {
  const initialState = {
    loading: false,
    error: null,

    acivePage: 1,
    perPage: 10,

    products: null,
    oneProduct: null,

    order: null,
    totalOrder: null,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const setLoading = (bool) => {
    dispatch({
      type: LOADING,
      payload: bool,
    })
  }

  const setError = (message) => {
    dispatch({
      type: ERROR,
      payload: message,
    })

    setTimeout(() => setError(null), 1500)
  }

  const getProducts = async (page, perPage) => {
    setLoading(true)

    const response = await getProductsApi(page, perPage)

    response
      ? dispatch({
          type: GET_PRODUCTS,
          payload: response,
        })
      : setError('ERROR: GET /products')
  }

  const getOneProduct = async (id) => {
    setLoading(true)

    const response = await getProductIDApi(id)

    response
      ? dispatch({
          type: GET_PRODUCT_INFO,
          payload: response,
        })
      : setError(`ERROR: GET /product/${id}`)
  }

  const changePage = (number) => {
    getProducts(number, state.perPage)

    dispatch({
      type: CHANGE_PAGE,
      payload: number,
    })
  }

  const changeOrderList = (orderList) => {
    dispatch({
      type: CHANGE_ORDER_LIST,
      payload: orderList,
    })
  }

  const setTotalOrders = (obj) => {
    dispatch({
      type: SET_TOTAL_ORDERS,
      payload: obj,
    })
  }

  return (
    <AppContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        acivePage: state.acivePage,
        perPage: state.perPage,
        products: state.products,
        oneProduct: state.oneProduct,
        order: state.order,
        totalOrder: state.totalOrder,

        setLoading,
        setError,
        getProducts,
        getOneProduct,
        changePage,
        changeOrderList,
        setTotalOrders,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
