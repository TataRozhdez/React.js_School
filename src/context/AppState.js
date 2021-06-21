import React, { useReducer } from 'react'

import appReducer from './appReducer'
import AppContext from './appContext'
import { instance } from '../axios/axiosConfig'
import {
  CALC_PAGE,
  CHANGE_PAGE,
  ERROR,
  GET_PRODUCTS,
  GET_PRODUCT_INFO,
  LOADING,
} from './types'

const AppState = (props) => {
  const initialState = {
    loading: false,
    error: '',
    page: 1,
    perPage: 10,
    totalPage: 1,
    totalItems: 1,

    products: [],
    oneProduct: null,
    cart: [],
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
  }

  const calcTotalPage = (numItems) => {
    const numPage = Math.floor(numItems / state.perPage)
    dispatch({
      type: CALC_PAGE,
      payload: numPage,
    })
  }

  const getProducts = async (page, perPage) => {
    setLoading(true)
    try {
      const products = await instance.get('/products', {
        params: {
          page,
          perPage,
        },
      })
      calcTotalPage(products.data.totalItems)
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data.items,
      })
    } catch (error) {
      setError('ERROR: GET /products')

      setTimeout(() => setError(''), 1000)
    }
  }

  const getOneProduct = async (id) => {
    setLoading(true)
    try {
      const product = await instance.get(`/products/${id}`)

      dispatch({
        type: GET_PRODUCT_INFO,
        payload: product.data,
      })
    } catch (error) {
      setError('ERROR: GET /product/:id')

      setTimeout(() => setError(''), 1000)
    }
  }

  const changePage = (number) => {
    getProducts(number, state.perPage)

    dispatch({
      type: CHANGE_PAGE,
      payload: number,
    })
  }

  const addToCart = (id, name, price) => {
    const localCart = localStorage.getItem('shopcart')
    const cart = JSON.parse(localCart)

    const newLocal = []

    if (cart) {
      const item = cart.find((c) => c.id === id)

      if (item) {
        const arr = cart.filter((item) => item.id !== id)

        newLocal.push(
          {
            id: id,
            name: name,
            price: price,
            number: ++item.number,
          },
          ...arr
        )
      } else {
        newLocal.push(
          {
            id: id,
            name: name,
            price: price,
            number: 1,
          },
          ...cart
        )
      }
    } else if (!cart) {
      newLocal.push({
        id: id,
        name: name,
        price: price,
        number: 1,
      })
    }

    localStorage.setItem('shopcart', JSON.stringify(newLocal))
  }

  return (
    <AppContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        page: state.page,
        perPage: state.perPage,
        products: state.products,
        oneProduct: state.oneProduct,
        cart: state.cart,
        totalPage: state.totalPage,
        totalItems: state.totalItems,

        setLoading,
        setError,
        calcTotalPage,
        getProducts,
        getOneProduct,
        changePage,
        addToCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
