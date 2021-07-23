import { instance } from './axiosConfig'

export const getProductsApi = async ({
  page,
  perPage,
  minPrice,
  maxPrice,
  origins,
  editable,
}) =>
  await instance
    .get('/products', {
      params: {
        page,
        perPage,
        minPrice,
        maxPrice,
        origins,
        editable,
      },
    })
    .then((res) => {
      return {
        products: res.data.items,
        total: res.data.totalItems,
      }
    })
    .catch((err) => {
      throw Error(err)
    })

export const getProductIDApi = async (id) =>
  await instance
    .get(`/products/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw Error(err)
    })

export const postProductApi = async (data) =>
  await instance
    .post(`/products`, data)
    .then((res) => res)
    .catch((err) => {
      throw Error(err)
    })

export const patchProductApi = async (id, data) =>
  await instance
    .patch(`/products/${id}`, data)
    .then((res) => res)
    .catch((err) => {
      throw Error(err)
    })
