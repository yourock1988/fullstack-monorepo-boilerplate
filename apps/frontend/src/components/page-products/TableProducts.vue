<script>
import { mapActions, mapGetters } from 'vuex'
import TheadPart from './TheadPart.vue'
import TdEditable from './TdEditable.vue'

export default {
  components: { TheadPart, TdEditable },

  computed: {
    ...mapGetters('products', ['getProducts']),

    columnCaptions() {
      return Object.keys(this.getProducts[0] ?? {}).filter(key => key !== 'id')
    },
  },

  created() {
    // eslint-disable-next-line vue/no-undef-properties
    this.readProducts()
  },

  methods: {
    ...mapActions('products', ['readProducts', 'deleteProductById']),
  },
}
</script>

<template>
  <table>
    <thead-part :column-captions="columnCaptions"></thead-part>
    <tbody>
      <tr v-for="product of getProducts" :key="product.id">
        <th>{{ product.id }}</th>
        <td-editable
          v-for="columnCaption of columnCaptions"
          :key="product.id + columnCaption"
          :product="product"
          :prop-name="columnCaption"
        ></td-editable>
        <td>
          <button @click="deleteProductById(product.id)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
