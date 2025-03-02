<script>
import LineProduct from '@/components/LineProduct.vue'

export default {
  components: { LineProduct },

  props: ['products'],
}
</script>

<template>
  <ul class="products-line">
    <LineProduct
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
