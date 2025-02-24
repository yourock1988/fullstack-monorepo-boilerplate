<script>
import TileProduct from './TileProduct.vue'

export default {
  components: { TileProduct },

  props: ['watchedProducts'],
}
</script>

<template>
  <div class="watched-products">
    <h3>Просмотренные товары</h3>
    <ul class="products">
      <TileProduct
        v-for="product of watchedProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
