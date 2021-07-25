import history from '../services/history'

const prepareParams = (data) =>
  Object.keys(data).reduce((acc, key, index) => {
    let prefix = !index ? '?' : '&'

    acc += `${prefix}${key}=${data[key]}`
    return acc
  }, '')

const createObjParams = (search) => {
  const params = {}

  search.replace(
    /([^?=&]+)=([^&]*)/g,
    (_, key, value) =>
      (params[decodeURIComponent(key)] = decodeURIComponent(value))
  )
  return params
}

const getUniqueParams = (objSearch, data) =>
  Object.entries(objSearch).filter(
    (par) => !Object.keys(data).find((d) => d === par[0])
  )

export const setLinkParams = (data) => {
  const { pathname, search } = history.location
  const objSearch = createObjParams(search)

  const uniqueParams = getUniqueParams(objSearch, data)

  const rest = uniqueParams.reduce((acc, cur) => {
    acc += `&${cur[0]}=${cur[1]}`
    return acc
  }, '')

  history.push({
    pathname,
    search: prepareParams(data) + rest,
  })
}

export const getValueParams = (data) => {
  const { search } = history.location

  const params = createObjParams(search)

  // par = ['origins', 'usa'] => data = ['origins'] => d['origins'] !== par[1]
  const uniqueParams = Object.entries(params).filter((par) =>
    Object.keys(data).find((d) => d === par[0] && `${data[d]}` !== `${par[1]}`)
  )

  return uniqueParams
}
