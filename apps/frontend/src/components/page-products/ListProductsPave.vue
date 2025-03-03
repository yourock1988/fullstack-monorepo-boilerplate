<script>
import TileProduct from '@/components/page-products/TileProduct.vue'

export default {
  components: { TileProduct },

  props: ['products'],
}
</script>

<template>
  <ul class="products">
    <TileProduct
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
