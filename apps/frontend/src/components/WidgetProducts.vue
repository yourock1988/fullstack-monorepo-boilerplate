<script>
import ListProducts from './ListProducts.vue'
import ListProductsLines from './ListProductsLines.vue'
import ListProductsTable from './ListProductsTable.vue'

export default {
  components: { ListProducts, ListProductsLines, ListProductsTable },

  props: ['products'],

  data() {
    return {
      canShowHint: false,
    }
  },

  watch: {
    products(newValue) {
      if (newValue.length > 0) {
        this.canShowHint = true
      }
    },
  },
}
</script>

<template>
  <!-- <ListProducts v-if="products.length" :products="products" /> -->

  <!-- <ListProductsLines v-if="products.length" :products="products" /> -->

  <ListProductsTable v-if="products.length" :products="products" />

  <div v-else class="no-goods">
    <h2 v-if="canShowHint">
      <i>
        К сожалению, ни один наш товар не соответствует вашим высоким
        требованиям!
      </i>
    </h2>
  </div>
</template>
