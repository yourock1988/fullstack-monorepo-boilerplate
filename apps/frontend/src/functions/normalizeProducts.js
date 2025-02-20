function normalizeProducts(products) {
  const cloneProducts = structuredClone(products)

  cloneProducts.forEach(p => {
    const pattern = {
      'Частота процессора': [' Ghz', 'Ghz'],
      'Блок питания': ['P', ''],
    }

    Object.entries(pattern).forEach(([key, val]) => {
      if (p.attributes?.[key]) {
        p.attributes[key] = p.attributes?.[key]?.replace(val[0], val[1])
      }
    })
  })

  return cloneProducts
}

export default normalizeProducts
