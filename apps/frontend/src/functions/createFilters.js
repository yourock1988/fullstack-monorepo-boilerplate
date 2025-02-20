function createFilters(products) {
  const filters = []

  products.forEach(product => {
    Object.entries(product.attributes).forEach(([key, val]) => {
      let filter = filters.find(f => f.attrName === key)
      if (!filter) {
        filter = { attrName: key, attrValues: [] }
        filters.push(filter)
      }
      let attr = filter.attrValues.find(av => av.caption === val)
      if (!attr) {
        attr = { caption: val, count: 0, isChecked: false }
        filter.attrValues.push(attr)
      }
      attr.count += 1
    })
  })

  filters.forEach(filter => {
    filter.attrValues = filter.attrValues.toSorted(
      ({ caption }, { caption: prev }) =>
        parseFloat(caption) - parseFloat(prev) || caption.localeCompare(prev)
    )
  })

  return filters.toSorted(({ attrName }, { attrName: prev }) =>
    attrName.localeCompare(prev)
  )
}

export default createFilters
