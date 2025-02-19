<script>
export default {
  props: ['pagesTotal'],

  emits: ['current-page-changed'],

  data() {
    return {
      selectedCurrentPage: 0,
    }
  },

  computed: {
    availablePages() {
      return Array.from(Array(this.pagesTotal), (_, idx) => idx + 1)
    },
  },

  watch: {
    pagesTotal() {
      this.changeCurrentPage(0)
    },
  },

  methods: {
    changeCurrentPage(currentPage) {
      this.selectedCurrentPage = currentPage
      this.$emit('current-page-changed', currentPage)
    },
  },
}
</script>

<template>
  <div class="wrap-paginator">
    <ul class="paginator">
      <li
        v-for="(page, idx) of availablePages"
        :key="idx"
        :class="{ selected: selectedCurrentPage === idx }"
        @click="changeCurrentPage(idx)"
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>
