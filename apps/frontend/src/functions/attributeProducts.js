function filtrateFilters(filters) {
  const onlyChecked = filters
    .filter(f => f.attrValues.some(av => av.isChecked))
    .map(f => ({ ...f, attrValues: f.attrValues.filter(av => av.isChecked) }))
  return onlyChecked
}

function attributeProducts(products, filters) {
  const onlyChecked = filtrateFilters(filters)
  return products.filter(({ attributes }) =>
    onlyChecked.every(({ attrName, attrValues }) =>
      attrValues.some(attrValue => attributes[attrName] === attrValue.caption)
    )
  )
}

export default attributeProducts
