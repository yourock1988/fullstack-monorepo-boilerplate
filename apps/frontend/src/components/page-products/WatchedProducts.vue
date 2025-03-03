<script>
import TileProduct from '@/components/page-products/TileProduct.vue'

export default {
  components: { TileProduct },

  props: ['products'],
}
</script>

<template>
  <div class="watched-products">
    <h3>Просмотренные товары</h3>
    <ul class="products">
      <TileProduct
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
