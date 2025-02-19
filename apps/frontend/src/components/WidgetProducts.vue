<script>
import products from '@/json/products.json'
import searchProducts from '@/functions/searchProducts'
import sortProducts from '@/functions/sortProducts'
import paginateProducts from '@/functions/paginateProducts'
import TileProduct from '@/components/TileProduct.vue'

products.forEach(p => {
  p.priceUah = Math.round((p.price * 42) / 100) * 100
})

export default {
  components: { TileProduct },

  props: ['sortingType', 'pageSize', 'currentPage', 'searchQuery'],

  emits: ['pages-total-changed', 'min-price-changed', 'max-price-changed'],

  data() {
    return {
      products: [],
    }
  },

  computed: {
    searchedProducts() {
      return searchProducts(this.products, this.searchQuery)
    },

    sortedProducts() {
      return sortProducts(this.searchedProducts, this.sortingType)
    },

    paginatedProducts() {
      const { sortedProducts, currentPage, pageSize } = this
      return paginateProducts(sortedProducts, currentPage, pageSize)
    },

    pagesTotal() {
      return Math.ceil(this.sortedProducts.length / this.pageSize)
    },

    minPrice() {
      const min = Math.min(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(min) ? min : 0
    },

    maxPrice() {
      const max = Math.max(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(max) ? max : Number.MAX_SAFE_INTEGER
    },
  },

  watch: {
    pagesTotal(newValue) {
      this.$emit('pages-total-changed', newValue)
    },

    minPrice(newValue) {
      this.$emit('min-price-changed', newValue)
    },

    maxPrice(newValue) {
      this.$emit('max-price-changed', newValue)
    },
  },

  mounted() {
    setTimeout(() => {
      this.products = products.filter(p => p.priceUah !== 5900)
    }, 1500)
    setTimeout(() => {
      this.products = products.filter(p => p.priceUah !== 8300)
    }, 2500)
    setTimeout(() => {
      this.products = products.filter(p => p.priceUah !== 205800)
    }, 4000)
    setTimeout(() => {
      this.products = products.filter(p => p.priceUah !== 128300)
    }, 5500)
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
