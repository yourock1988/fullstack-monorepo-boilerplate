<script>
export default {
  emits: ['list-type-updated'],

  data() {
    return {
      availableListTypes: {
        Pave: 'fa-brands fa-microsoft',
        Table: 'fa-solid fa-table',
        Wall: 'fa-solid fa-water',
      },
      listType: 'Pave',
    }
  },

  watch: {
    listType(newValue) {
      this.$emit('list-type-updated', newValue)
    },
  },

  mounted() {
    this.$emit('list-type-updated', this.listType)
  },
}
</script>

<template>
  <div class="wrap-picker-tile-style">
    <div id="elPickerTileStyle" class="picker-tile-style">
      <span v-for="(icon, type) in availableListTypes" :key="type">
        <input
          :id="type"
          v-model="listType"
          :value="type"
          type="radio"
          name="tile-style"
        />
        <label :for="type">
          <i :class="icon"></i>
        </label>
      </span>
    </div>
  </div>
</template>
