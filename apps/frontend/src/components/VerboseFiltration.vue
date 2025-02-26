<script>
import SelectSortingType from './SelectSortingType.vue'
import SelectPageSize from './SelectPageSize.vue'
import ShowFiltratedCount from './ShowFiltratedCount.vue'

export default {
  components: { SelectSortingType, SelectPageSize, ShowFiltratedCount },

  props: ['filtratedCount'],

  emits: ['sorting-type-changed', 'page-size-changed'],

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
      <button id="elButtonShowFilters">Фильтры</button>
    </div>

    <ShowFiltratedCount :filtrated-count="filtratedCount" />

    <div class="wrap-filter-resets">
      <button>Сбросить</button>
      <button>GeForce RTX 3060 x</button>
    </div>

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
