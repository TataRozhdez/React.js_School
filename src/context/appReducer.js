import {
  ERROR,
  GET_PRODUCTS,
  SET_CART,
  LOADING,
  CALC_PAGE,
  CHANGE_PAGE,
  GET_PRODUCT_INFO,
} from './types'

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: '',
        loading: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case GET_PRODUCTS:
      return {
        ...state,
        error: '',
        loading: false,
        oneProduct: null,
        products: action.payload,
      }
    case GET_PRODUCT_INFO:
      return {
        ...state,
        error: '',
        loading: false,
        oneProduct: action.payload,
      }
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      }
    case CALC_PAGE:
      return {
        ...state,
        totalPage: action.payload,
      }
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    default:
      return state
  }
}
