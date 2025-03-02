<script>
import BrickProduct from '@/components/BrickProduct.vue'

export default {
  components: { BrickProduct },

  props: ['products'],
}
</script>

<template>
  <ul class="products-line">
    <BrickProduct
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
