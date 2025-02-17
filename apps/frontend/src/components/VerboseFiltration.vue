<script>
import SelectSortingType from './SelectSortingType.vue'

export default {
  components: { SelectSortingType },

  methods: {
    changeSortingType(sortingType) {
      console.log(sortingType)
    },
  },
}
</script>

<template>
  <div class="layout-verbose-filtration">
    <div class="wrap-button-show-filters">
      <button id="elButtonShowFilters">Фильтры</button>
    </div>

    <div class="wrap-span-filtrated-items-count">
      <span id="elSpanFiltratedItemsCount">Найдено 4000 товаров</span>
    </div>

    <div class="wrap-filter-resets">
      <button>Сбросить</button>
      <button>GeForce RTX 3060 x</button>
    </div>

    <SelectSortingType @sorting-type-changed="changeSortingType" />

    <div class="wrap-select-items-on-page">
      <select id="elSelectItemsOnPage" class="select-items-on-page">
        <option value="">30</option>
        <option value="">60</option>
        <option value="">90</option>
      </select>
    </div>

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
