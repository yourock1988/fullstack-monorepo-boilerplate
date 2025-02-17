const sortFnExpensiveFirst = ({ price }, { price: prev }) => prev - price
const sortFnCheapFirst = ({ price }, { price: prev }) => price - prev
const sortFnIdHightLow = ({ id }, { id: prev }) => prev - id
const sortFnIdLowHight = ({ id }, { id: prev }) => id - prev

const expensiveFirst = products => products.toSorted(sortFnExpensiveFirst)
const cheapFirst = products => products.toSorted(sortFnCheapFirst)
const idHightLow = products => products.toSorted(sortFnIdHightLow)
const idLowHight = products => products.toSorted(sortFnIdLowHight)

const sortingMethods = {
  expensiveFirst,
  cheapFirst,
  idHightLow,
  idLowHight,
}

function sortProducts(products, sortingType) {
  if (sortingType in sortingMethods) {
    return sortingMethods[sortingType](products)
  }
  throw new Error('Sorting Error: wrong sortingType')
}

export default sortProducts
