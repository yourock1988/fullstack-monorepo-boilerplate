<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],
}
</script>

<template>
  <div
    v-if="modelValue"
    class="backdrop"
    @click="$emit('update:modelValue', false)"
  >
    <div class="offcanvas" @click.stop></div>
  </div>
</template>
