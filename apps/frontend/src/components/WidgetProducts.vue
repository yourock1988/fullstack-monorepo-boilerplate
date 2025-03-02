<script>
import ListProductsPave from './ListProductsPave.vue'
import ListProductsWall from './ListProductsWall.vue'
import ListProductsTable from './ListProductsTable.vue'

export default {
  components: { ListProductsPave, ListProductsWall, ListProductsTable },

  props: ['products'],

  data() {
    return {
      canShowHint: false,
      availableListTypes: ['pave', 'table', 'wall'],
      listType: 'pave',
    }
  },

  watch: {
    products(newValue) {
      if (newValue.length > 0) {
        this.canShowHint = true
      }
    },
  },
}
</script>

<template>
  <!-- <ListProductsPave v-if="products.length" :products="products" /> -->

  <!-- <ListProductsWall v-if="products.length" :products="products" /> -->

  <ListProductsTable v-if="products.length" :products="products" />

  <div v-else class="no-goods">
    <h2 v-if="canShowHint">
      <i>
        К сожалению, ни один наш товар не соответствует вашим высоким
        требованиям!
      </i>
    </h2>
  </div>
</template>
