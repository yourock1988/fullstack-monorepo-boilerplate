<script>
import ListProductsPave from './ListProductsPave.vue'
import ListProductsWall from './ListProductsWall.vue'
import ListProductsTable from './ListProductsTable.vue'

export default {
  components: { ListProductsPave, ListProductsWall, ListProductsTable },

  props: ['products', 'listType'],

  data() {
    return {
      canShowHint: false,
      availableListTypes: ['Pave', 'Table', 'Wall'],
    }
  },

  computed: {
    listProducts() {
      if (!this.availableListTypes.includes(this.listType)) {
        throw new Error(`Bad ListProducts Component Name: ${this.listType}`)
      }
      return `ListProducts${this.listType}`
    },
  },

  watch: {
    products(newValue) {
      if (newValue.length > 0) this.canShowHint = true
    },
  },
}
</script>

<template>
  <Component
    :is="listProducts"
    v-if="products.length"
    :products="products"
  ></Component>

  <div v-else class="no-goods">
    <h2 v-if="canShowHint">
      <i>
        К сожалению, ни один наш товар не соответствует вашим высоким
        требованиям!
      </i>
    </h2>
  </div>
</template>
