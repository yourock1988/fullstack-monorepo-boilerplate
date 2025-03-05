function interlinkedWithin(namespace, cells) {
  return cells.reduce((acc, item) => {
    const [[key, val]] = Object.entries(item)
    return { ...acc, [key]: generateComputed(namespace, key, val) }
  }, {})
}

function generateComputed(namespace, storeName, mutationName) {
  return {
    get() {
      return this.$store.state[namespace][storeName]
    },
    set(newValue) {
      this.$store.commit(`${namespace}/${mutationName}`, newValue)
    },
  }
}

export default interlinkedWithin

// interlinkedWithin('products', [{ searchQuery: 'SET_SEARCH_QUERY' }])
