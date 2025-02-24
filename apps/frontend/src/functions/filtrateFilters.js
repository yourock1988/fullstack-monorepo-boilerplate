function filtrateFilters(filters) {
  const onlyChecked = filters
    .filter(f => f.attrValues.some(av => av.isChecked))
    .map(f => ({ ...f, attrValues: f.attrValues.filter(av => av.isChecked) }))
  return onlyChecked
}

export default filtrateFilters
