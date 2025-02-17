<script>
import products from '@/json/products.json'
import sortProducts from '@/functions/sortProducts'
import TileProduct from '@/components/TileProduct.vue'

products.forEach(p => {
  p.priceUah = Math.round((p.price * 42) / 100) * 100
})

export default {
  components: { TileProduct },

  props: ['customerChoice'],

  data() {
    return {
      products,
    }
  },

  computed: {
    computedProducts() {
      return sortProducts(this.products, this.customerChoice.sortingType)
    },
  },
}
</script>

<template>
  <ul class="products">
    <TileProduct
      v-for="product of computedProducts"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
