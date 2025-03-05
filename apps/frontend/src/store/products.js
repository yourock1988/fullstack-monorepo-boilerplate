import * as apiProducts from '@/api/products'
import convertProductsPrice from '@/functions/convertProductsPrice'

import searchProducts from '@/functions/searchProducts'
import rangeProducts from '@/functions/rangeProducts'
import attributeProducts from '@/functions/attributeProducts'
import sortProducts from '@/functions/sortProducts'
import paginateProducts from '@/functions/paginateProducts'

export default {
  namespaced: true,

  state() {
    return {
      searchQuery: '',
      priceFrom: 0,
      priceTo: 0,
      attributes: [],
      sortingType: 'expensiveFirst',
      currentPage: 0,
      pageSize: 10,

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

    attributedProducts(s, g) {
      return attributeProducts(g.rangedProducts, s.attributes)
    },

    sortedProducts(s, g) {
      return sortProducts(g.attributedProducts, s.sortingType)
    },

    paginatedProducts(s, g) {
      return paginateProducts(g.sortedProducts, s.currentPage, s.pageSize)
    },

    filtratedCount(_, g) {
      return g.sortedProducts.length
    },

    pagesTotal(s, g) {
      return Math.ceil(g.filtratedCount / s.pageSize)
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

    SET_ATTRIBUTES(state, newValue) {
      state.attributes = newValue
    },

    SET_SORTING_TYPE(state, newValue) {
      state.sortingType = newValue
    },

    SET_CURRENT_PAGE(state, newValue) {
      state.currentPage = newValue
    },

    SET_PAGE_SIZE(state, newValue) {
      state.pageSize = newValue
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
