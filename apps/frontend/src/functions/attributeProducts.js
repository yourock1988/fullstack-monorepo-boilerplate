function attributeProducts(products, onlyCheckedFilters) {
  return products.filter(({ attributes }) =>
    onlyCheckedFilters.every(({ attrName, attrValues }) =>
      attrValues.some(attrValue => attributes[attrName] === attrValue.caption)
    )
  )
}

export default attributeProducts
