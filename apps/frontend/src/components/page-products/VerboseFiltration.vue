<script>
import PickerSortingType from '@/components/page-products/PickerSortingType.vue'
import PickerPageSize from '@/components/page-products/PickerPageSize.vue'
import ResetAttributes from '@/components/page-products/ResetAttributes.vue'
import PickerListType from '@/components/page-products/PickerListType.vue'
import ShowFiltratedCount from '@/components/page-products/ShowFiltratedCount.vue'

export default {
  components: {
    PickerSortingType,
    PickerListType,
    PickerPageSize,
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
    'list-type-updated',
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

    <PickerSortingType @sorting-type-changed="changeSortingType" />

    <PickerPageSize @page-size-changed="changePageSize" />

    <PickerListType @list-type-updated="$emit('list-type-updated', $event)" />
  </div>
</template>
