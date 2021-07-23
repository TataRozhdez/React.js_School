import { instance } from './axiosConfig'

export const getOrigins = async () =>
  await instance
    .get(`/products-origins`)
    .then((res) => res.data.items)
    .catch((err) => {
      throw Error(err)
    })
