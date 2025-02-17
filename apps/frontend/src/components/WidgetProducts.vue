<script>
import products from '@/json/products.json'
import TileProduct from './TileProduct.vue'

products.forEach(p => {
  p.priceUah = Math.round((p.price * 42) / 100) * 100
})

export default {
  components: { TileProduct },

  data() {
    return {
      products,
    }
  },
}
</script>

<template>
  <ul class="products">
    <TileProduct
      v-for="product of products.slice(0, 30)"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
