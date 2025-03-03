<script>
import RowProduct from '@/components/page-products/RowProduct.vue'

export default {
  components: { RowProduct },

  props: ['products'],
}
</script>

<template>
  <table class="products-table">
    <thead>
      <tr>
        <th>id</th>
        <th>photo</th>
        <th>caption</th>
        <th class="td-available">available</th>
        <th>price</th>
        <th>cart</th>
      </tr>
    </thead>
    <tbody>
      <RowProduct
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </tbody>
  </table>
</template>
