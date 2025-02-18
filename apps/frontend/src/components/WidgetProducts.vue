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

  emits: ['pages-total-changed'],

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
      return paginateProducts(
        this.sortedProducts,
        this.currentPage,
        this.pageSize
      )
    },

    pagesTotal() {
      return Math.ceil(this.sortedProducts.length / this.pageSize)
    },
  },

  watch: {
    pagesTotal(newValue) {
      this.$emit('pages-total-changed', newValue)
    },
  },

  created() {
    this.products = products
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
