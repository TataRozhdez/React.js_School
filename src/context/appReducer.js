import {
  ERROR,
  LOADING,
  GET_PRODUCTS,
  GET_PRODUCT_INFO,
  CHANGE_PAGE,
  CHANGE_ORDER_LIST,
  SET_TOTAL_ORDERS,
} from './types'

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: null,
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
        error: null,
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
    case CHANGE_ORDER_LIST:
      return {
        ...state,
        order: action.payload,
      }
    case SET_TOTAL_ORDERS:
      return {
        ...state,
        totalOrder: action.payload,
      }
    case CHANGE_PAGE:
      return {
        ...state,
        acivePage: action.payload,
      }
    default:
      return state
  }
}
