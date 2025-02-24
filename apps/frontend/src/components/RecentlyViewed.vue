<script>
import TileProduct from './TileProduct.vue'

export default {
  components: { TileProduct },

  props: ['recentlyViewedProducts'],

  data() {
    return {}
  },
}
</script>

<template>
  <div class="recently-viewed">
    <h3>Последние просмотренные товары</h3>
    <ul class="products">
      <TileProduct
        v-for="product of recentlyViewedProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
