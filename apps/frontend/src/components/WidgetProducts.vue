<script>
import TileProduct from '@/components/TileProduct.vue'

export default {
  components: { TileProduct },

  props: ['paginatedProducts'],
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
