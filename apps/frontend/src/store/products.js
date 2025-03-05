import * as apiProducts from '@/api/products'
import searchProducts from '@/functions/searchProducts'
import convertProductsPrice from '@/functions/convertProductsPrice'

export default {
  namespaced: true,

  state() {
    return {
      searchQuery: '',

      products: [],
      ccy: { usdUah: 42 },
    }
  },

  getters: {
    searchedProducts(state) {
      return searchProducts(state.products, state.searchQuery)
    },
  },

  mutations: {
    SET_SEARCH_QUERY(state, newValue) {
      state.searchQuery = newValue
    },

    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },

    SET_PRODUCTS(state, products) {
      state.products = products
      convertProductsPrice(state.products, state.ccy)
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
