import * as apiProducts from '@/api/products'
import convertProductsPrice from '@/functions/convertProductsPrice'

import searchProducts from '@/functions/searchProducts'
import rangeProducts from '@/functions/rangeProducts'

export default {
  namespaced: true,

  state() {
    return {
      searchQuery: '',
      priceFrom: 0,
      priceTo: 0,

      products: [],
      ccy: { usdUah: 42 },
    }
  },

  getters: {
    searchedProducts(s) {
      return searchProducts(s.products, s.searchQuery)
    },

    rangedProducts(s, g) {
      return rangeProducts(g.searchedProducts, s.priceFrom, s.priceTo)
    },
  },

  mutations: {
    SET_SEARCH_QUERY(state, newValue) {
      state.searchQuery = newValue
    },

    SET_PRICE_FROM(state, newValue) {
      state.priceFrom = newValue
    },

    SET_PRICE_TO(state, newValue) {
      state.priceTo = newValue
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
