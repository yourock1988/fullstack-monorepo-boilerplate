<script>
import SelectSortingType from './SelectSortingType.vue'
import SelectPageSize from './SelectPageSize.vue'
import ShowFiltratedCount from './ShowFiltratedCount.vue'
import ResetAttributes from './ResetAttributes.vue'

export default {
  components: {
    SelectSortingType,
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

    <div class="wrap-picker-tile-style">
      <div id="elPickerTileStyle" class="picker-tile-style">
        <input id="s-grid" type="radio" name="tile-style" checked />
        <input id="s-table" type="radio" name="tile-style" />
        <input id="s-list" type="radio" name="tile-style" />
        <label for="s-grid">
          <i class="fa-brands fa-microsoft"></i>
        </label>
        <label for="s-table">
          <i class="fa-solid fa-table"></i>
        </label>
        <label for="s-list">
          <i class="fa-solid fa-water"></i>
        </label>
      </div>
    </div>
  </div>
</template>
