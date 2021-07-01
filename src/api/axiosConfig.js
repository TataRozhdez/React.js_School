import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

// export const getProductsAPI = (page, perPage) => {
//   const products = instance.get('/products', {
//     params: {
//       page,
//       perPage,
//     },
//   })

//   return products
// }
