<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      availableAttributes: [],
    }
  },

  watch: {
    modelValue(newValue) {
      const clone = JSON.parse(JSON.stringify(newValue))
      this.availableAttributes = clone
    },

    availableAttributes: {
      deep: true,
      handler(newValue, oldValue) {
        // omg magic !!
        if (newValue === oldValue) {
          const clone = JSON.parse(JSON.stringify(newValue))
          this.$emit('update:modelValue', clone)
        }
      },
    },
  },
}
</script>

<template>
  <div class="wrap-filter-resets">
    <button>Сбросить</button>

    <template v-for="(attribute, idx) of availableAttributes" :key="idx">
      <template
        v-for="(attrValue, subIdx) of attribute.attrValues"
        :key="subIdx"
      >
        <button v-if="attrValue.isChecked" @click="attrValue.isChecked = false">
          <i>{{ attribute.attrName }} &nbsp;</i>
          <b>{{ attrValue.caption }} &nbsp;</b>
          <span>x</span>
        </button>
      </template>
    </template>
  </div>
</template>
