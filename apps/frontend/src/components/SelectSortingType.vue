<script>
export default {
  emits: ['sorting-type-changed'],

  data() {
    return {
      selectedSortingType: 'rating',

      sortingTypes: {
        rating: 'По рейтингу',
        cheapFirst: 'Сначала дорогие',
        expensiveFirst: 'Сначала дешевые',
        novelties: 'Новинки',
      },
    }
  },

  watch: {
    selectedSortingType(newValue, oldValue) {
      console.log(newValue, oldValue)
      this.$emit('sorting-type-changed', newValue)
    },
  },
}
</script>

<template>
  <div class="wrap-select-sorting-type">
    <select
      id="elSelectSortingType"
      v-model="selectedSortingType"
      class="select-sorting-type"
    >
      <option
        v-for="(sortingTypeValue, sortingTypeKey) in sortingTypes"
        :key="sortingTypeKey"
        :value="sortingTypeKey"
      >
        {{ sortingTypeValue }}
      </option>
    </select>
  </div>
</template>
