import { instance } from './axiosConfig'

export const postOrderApi = async (data) =>
  await instance
    .post(`/orders`, data)
    .then((res) => res)
    .catch((err) => {
      throw Error(err)
    })

export const getOrdersApi = async () =>
  await instance
    .get(`/orders`)
    .then((res) => res.data)
    .catch((err) => {
      throw Error(err)
    })

export const getOrderIDApi = async (id) =>
  await instance
    .get(`/orders/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw Error(err)
    })
