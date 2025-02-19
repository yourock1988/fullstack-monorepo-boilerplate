<script>
export default {
  emits: ['sorting-type-changed'],

  data() {
    return {
      selectedSortingType: 'idHightLow',

      sortingTypes: {
        expensiveFirst: 'Сначала дорогие',
        cheapFirst: 'Сначала дешевые',
        idHightLow: 'По id от большего',
        idLowHight: 'По id от меньшего',
        randomize: 'Случайным образом',
      },
    }
  },

  watch: {
    selectedSortingType(newValue) {
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
