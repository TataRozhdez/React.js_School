import { instance } from './axiosConfig'

export const getProductsApi = async ({
  page,
  perPage,
  minPrice,
  maxPrice,
  origins,
}) => {
  try {
    const products = await instance.get('/products', {
      params: {
        page,
        perPage,
        minPrice,
        maxPrice,
        origins,
      },
    })
    return {
      products: products.data.items,
      total: products.data.totalItems,
    }
  } catch (error) {
    console.error(error)
  }
}

export const getProductIDApi = async (id) => {
  try {
    const product = await instance.get(`/products/${id}`)

    return product.data
  } catch (error) {
    console.error(error)
  }
}
