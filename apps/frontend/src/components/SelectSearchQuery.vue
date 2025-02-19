<script>
export default {
  emits: ['search-query-changed'],

  data() {
    return {
      searchQuery: '',
      isUpdated: false,
    }
  },

  watch: {
    searchQuery(newValue) {
      this.isUpdated = true
      if (newValue === '') {
        this.$emit('search-query-changed', newValue)
      }
    },
  },

  methods: {
    changeSearchQuery() {
      if (this.isUpdated && this.searchQuery !== '') {
        this.$emit('search-query-changed', this.searchQuery)
        this.isUpdated = false
      }
    },
  },
}
</script>

<template>
  <div class="wrap-search">
    <input
      v-model.trim="searchQuery"
      type="search"
      @keypress.enter="changeSearchQuery"
    />
    <button @click="changeSearchQuery">Найти</button>
  </div>
</template>
