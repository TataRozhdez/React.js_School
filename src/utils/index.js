import format from 'date-fns/format'

export const dateFormat = (date) => format(new Date(date), 'dd-MM-yyyy HH:mm')

export const calcOrders = (arr) =>
  arr.reduce(
    (acc, cur) => {
      acc.number += cur.number
      acc.price += +cur.price * +cur.number

      return acc
    },
    {
      number: 0,
      price: 0,
    }
  )

export const prepareListSelect = (arr) =>
  arr.reduce((acc, cur) => {
    acc.push({
      value: cur.value,
      label: cur.displayName,
    })

    return acc
  }, [])

export const stringFromSelect = (arr) =>
  arr.reduce((acc, cur) => {
    if (!acc.length) return (acc += `${cur.value}`)
    return (acc += `,${cur.value}`)
  }, '')

export const prepareOrderPost = (arr) =>
  arr.reduce((acc, cur) => {
    acc.push({
      productId: cur.id,
      count: cur.number,
    })

    return acc
  }, [])

export const sortForAlphabet = (arr) =>
  arr.sort((a, b) => a.name.localeCompare(b.name))
