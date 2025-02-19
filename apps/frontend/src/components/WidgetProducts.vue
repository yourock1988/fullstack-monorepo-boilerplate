<script>
import products from '@/json/products.json'

import searchProducts from '@/functions/searchProducts'
import rangeProducts from '@/functions/rangeProducts'
import sortProducts from '@/functions/sortProducts'
import paginateProducts from '@/functions/paginateProducts'

import TileProduct from '@/components/TileProduct.vue'

products.forEach(p => {
  p.priceUah = Math.round((p.price * 42) / 100) * 100
})

export default {
  components: { TileProduct },

  props: [
    'sortingType',
    'pageSize',
    'currentPage',
    'searchQuery',
    'priceFrom',
    'priceTo',
  ],

  emits: ['pages-total-changed', 'price-min-changed', 'price-max-changed'],

  data() {
    return {
      products: [],
    }
  },

  computed: {
    searchedProducts() {
      return searchProducts(this.products, this.searchQuery)
    },

    rangedProducts() {
      return rangeProducts(this.searchedProducts, this.priceFrom, this.priceTo)
    },

    sortedProducts() {
      return sortProducts(this.rangedProducts, this.sortingType)
    },

    paginatedProducts() {
      const { sortedProducts, currentPage, pageSize } = this
      return paginateProducts(sortedProducts, currentPage, pageSize)
    },

    pagesTotal() {
      return Math.ceil(this.sortedProducts.length / this.pageSize)
    },

    priceMin() {
      const min = Math.min(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(min) ? min : 0
    },

    priceMax() {
      const max = Math.max(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(max) ? max : Number.MAX_SAFE_INTEGER
    },
  },

  watch: {
    pagesTotal(newValue) {
      this.$emit('pages-total-changed', newValue)
    },

    priceMin(newValue) {
      this.$emit('price-min-changed', newValue)
    },

    priceMax(newValue) {
      this.$emit('price-max-changed', newValue)
    },
  },

  mounted() {
    setTimeout(() => {
      this.products = products
    }, 1000)
    // setTimeout(() => {
    //   this.products = products.filter(p => p.priceUah !== 5900)
    // }, 500)
    // setTimeout(() => {
    //   this.products = products.filter(p => p.priceUah !== 8300)
    // }, 1000)
    // setTimeout(() => {
    //   this.products = products.filter(p => p.priceUah !== 205800)
    // }, 1500)
    // setTimeout(() => {
    //   this.products = products.filter(p => p.priceUah !== 128300)
    // }, 2000)
  },
}
</script>

<template>
  <ul class="products">
    <TileProduct
      v-for="product of paginatedProducts"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
