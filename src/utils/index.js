export const getArrayByNumber = (number) => {
  const arr = []
  for (let i = 0; i < number; i += 1) {
    arr.push(i)
  }

  return arr
}

export const calcOrders = (arr) => {
  let num = 0
  let price = 0

  arr.map((a) => {
    num += a.number
    price += +a.price * +a.number

    return a
  })

  return {
    number: num,
    price,
  }
}

export const prepareListSelect = (arr) => {
  const newArr = arr.reduce((acc, cur) => {
    acc.push({
      value: cur.value,
      label: cur.displayName,
    })

    return acc
  }, [])
  return newArr
}

export const sortForAlphabet = (arr) =>
  arr.sort((a, b) => a.name.localeCompare(b.name))
