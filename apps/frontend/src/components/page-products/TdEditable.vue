<script>
import { mapActions } from 'vuex'

export default {
  props: ['product', 'propName'],

  data() {
    return {
      typeAttrs: {
        string: 'text',
        number: 'number',
        boolean: 'checkbox',
      },

      dataAttrs: {
        string: 'value',
        number: 'value',
        boolean: 'checked',
      },
    }
  },

  computed: {
    propType() {
      return typeof this.product[this.propName]
    },

    inputTypeAttr() {
      return this.typeAttrs[this.propType]
    },

    inputDataAttr() {
      return this.dataAttrs[this.propType]
    },
  },

  methods: {
    ...mapActions('products', ['updateProductById']),

    handleUpdateInput(event) {
      this.updateProductById({
        id: this.product.id,
        product: { [this.propName]: event.target[this.inputDataAttr] },
      })
    },
  },
}
</script>

<template>
  <td>
    <input
      :[inputDataAttr]="product[propName]"
      :type="inputTypeAttr"
      @change="handleUpdateInput"
    />
  </td>
</template>
