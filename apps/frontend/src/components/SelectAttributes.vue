<script>
import harvestAttributes from '@/functions/harvestAttributes'
import extractSelectedAttributes from '@/functions/extractSelectedAttributes'

export default {
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
          <li v-for="(attrValue, subIdx) of filter.attrValues" :key="subIdx">
            <div class="wrap-checkbox-fa">
              <input
                :id="`attr-${idx}-${subIdx}`"
                v-model="attrValue.isChecked"
                type="checkbox"
              />
              <label :for="`attr-${idx}-${subIdx}`">
                <i class="fa-solid fa-square-check"></i>
                <i class="fa-solid fa-square"></i>
                <span>
                  {{ attrValue.caption
                  }}<sup>({{ attrValue.count }})</sup></span
                >
              </label>
            </div>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
