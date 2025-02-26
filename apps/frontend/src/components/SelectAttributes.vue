<script>
import ItemAttrValue from './ItemAttrValue.vue'

export default {
  components: { ItemAttrValue },

  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      availableAttributes: [],
    }
  },

  watch: {
    modelValue(newValue) {
      this.availableAttributes = newValue
    },

    availableAttributes: {
      deep: true,
      handler(newValue) {
        this.$emit('update:modelValue', newValue)
      },
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
