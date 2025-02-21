<script>
export default {
  emits: ['sorting-type-changed'],

  data() {
    return {
      selectedSortingType: 'expensiveFirst',

      sortingTypes: {
        cheapFirst: 'Сначала дешевые',
        expensiveFirst: 'Сначала дорогие',
        idLowHight: 'По id от меньшего',
        idHightLow: 'По id от большего',
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
