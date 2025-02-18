<script>
export default {
  emits: ['page-size-changed'],

  data() {
    return {
      availablePageSizes: [10, 20, 30],
      selectedPageSize: 10,
    }
  },

  watch: {
    selectedPageSize(newValue) {
      this.$emit('page-size-changed', newValue)
    },
  },

  methods: {},
}
</script>

<template>
  <div class="wrap-select-items-on-page">
    <select
      id="elSelectItemsOnPage"
      v-model.number="selectedPageSize"
      class="select-items-on-page"
    >
      <option v-for="(pageSize, idx) of availablePageSizes" :key="idx">
        {{ pageSize }}
      </option>
    </select>
  </div>
</template>
