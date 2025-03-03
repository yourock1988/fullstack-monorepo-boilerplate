<script>
import SelectSortingType from './SelectSortingType.vue'
import SelectPageSize from './SelectPageSize.vue'
import ShowFiltratedCount from './ShowFiltratedCount.vue'
import ResetAttributes from './ResetAttributes.vue'
import SelectListType from './SelectListType.vue'

export default {
  components: {
    SelectSortingType,
    SelectListType,
    SelectPageSize,
    ShowFiltratedCount,
    ResetAttributes,
  },

  props: ['filtratedCount', 'modelValue'],

  emits: [
    'sorting-type-changed',
    'page-size-changed',
    'signal-reset-attributes',
    'update:modelValue',
    'offcanvas-show',
  ],

  methods: {
    changeSortingType(sortingType) {
      this.$emit('sorting-type-changed', sortingType)
    },

    changePageSize(pageSize) {
      this.$emit('page-size-changed', pageSize)
    },
  },
}
</script>

<template>
  <div class="layout-verbose-filtration">
    <div class="wrap-button-show-filters">
      <button id="elButtonShowFilters" @click="$emit('offcanvas-show')">
        Фильтры
      </button>
    </div>

    <ShowFiltratedCount :filtrated-count="filtratedCount" />

    <ResetAttributes
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    />

    <SelectSortingType @sorting-type-changed="changeSortingType" />

    <SelectPageSize @page-size-changed="changePageSize" />

    <SelectListType />
  </div>
</template>
