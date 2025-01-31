import * as apiProducts from '../api/products'

export default {
  namespaced: true,

  state() {
    return {
      products: [],
    }
  },

  getters: {
    getProducts(state) {
      return state.products.toSorted(({ id }, { id: prevId }) => id - prevId)
    },

    getCountProducts(state) {
      return state.products.length
    },

    getBudgetProducts(state) {
      return state.products.filter(product => product.price < 200)
    },

    getCountBudgetProducts(_, getters) {
      return getters.getBudgetProducts.length
    },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },

    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },

    UPDATE_PRODUCT_BY_ID(state, id, updatedProduct) {
      const findedProduct = state.products.find(product => product.id === id)
      if (findedProduct) Object.assign(findedProduct, updatedProduct)
    },

    REMOVE_PRODUCT_BY_ID(state, id) {
      state.products = state.products.filter(product => product.id !== id)
    },
  },

  actions: {
    async createProduct({ commit }, product) {
      const createdProduct = await apiProducts.postProduct(product)
      commit('ADD_PRODUCT', createdProduct)
    },

    async readProducts({ commit }) {
      const readedProducts = await apiProducts.getProducts()
      commit('SET_PRODUCTS', readedProducts)
    },

    async updateProductById({ commit }, { id, product }) {
      const updatedProduct = await apiProducts.patchProductById(id, product)
      commit('UPDATE_PRODUCT_BY_ID', id, updatedProduct)
    },

    async deleteProductById({ commit }, id) {
      await apiProducts.deleteProductById(id)
      commit('REMOVE_PRODUCT_BY_ID', id)
    },
  },
}
