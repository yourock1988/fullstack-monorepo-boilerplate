<script>
import createFilters from '@/functions/createFilters'
import filtrateFilters from '@/functions/filtrateFilters'

export default {
  props: ['products'],

  emits: ['selected-filters-changed'],

  data() {
    return {
      filters: [],
    }
  },

  watch: {
    filters: {
      deep: true,
      handler(newValue) {
        const onlyCheckedFilters = filtrateFilters(newValue)
        this.$emit('selected-filters-changed', onlyCheckedFilters)
      },
    },

    products() {
      this.filters = createFilters(this.products)
    },
  },
}
</script>

<template>
  <div class="filter-attributes">
    <h3>Фильтры</h3>
    <dl v-for="(filter, idx) of filters" :key="idx" class="filter-attribute">
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
