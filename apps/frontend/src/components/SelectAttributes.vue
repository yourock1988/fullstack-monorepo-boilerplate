<script>
import harvestAttributes from '@/functions/harvestAttributes'
import extractSelectedAttributes from '@/functions/extractSelectedAttributes'
import ItemAttrValue from './ItemAttrValue.vue'

export default {
  components: { ItemAttrValue },

  props: ['products'],

  emits: ['attributes-changed'],

  data() {
    return {
      availableAttributes: [],
    }
  },

  computed: {
    selectedAttributes() {
      return extractSelectedAttributes(this.availableAttributes)
    },
  },

  watch: {
    selectedAttributes(newValue) {
      this.$emit('attributes-changed', newValue)
    },

    products() {
      this.availableAttributes = harvestAttributes(this.products)
    },
  },
}
</script>

<template>
  <div class="filter-attributes">
    <h3>Атрибуты</h3>
    <dl
      v-for="(filter, idx) of availableAttributes"
      :key="idx"
      class="filter-attribute"
    >
      <dt>
        <h4>{{ filter.attrName }}</h4>
      </dt>
      <dd>
        <ul>
          <ItemAttrValue
            v-for="(attrValue, subIdx) of filter.attrValues"
            :key="subIdx"
            v-model="attrValue.isChecked"
            :attr-value="attrValue"
            :idx="idx"
            :sub-idx="subIdx"
          />
        </ul>
      </dd>
    </dl>
  </div>
</template>
