import { instance } from './axiosConfig'

export const postOrderApi = async (data) =>
  await instance
    .post(`/orders`, data)
    .then((res) => res)
    .catch((err) => new Error(err))

export const getOrdersApi = async () =>
  await instance
    .get(`/orders`)
    .then((res) => res.data)
    .catch((err) => err)

export const getOrderIDApi = async (id) =>
  await instance
    .get(`/orders/${id}`)
    .then((res) => res.data)
    .catch((err) => err)
