<script>
import TileProduct from '@/components/TileProduct.vue'

export default {
  components: { TileProduct },

  props: ['products'],
}
</script>

<template>
  <ul v-if="products.length" class="products">
    <TileProduct
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </ul>
  <div v-else class="no-goods">
    <h2>
      <i>
        К сожалению, ни один наш товар не соответствует вашим высоким
        требованиям!
      </i>
    </h2>
  </div>
</template>
