<script>
export default {
  props: ['priceMin', 'priceMax', 'text', 'modelValue'],

  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="wrap-input-range">
    <label for="priceFrom">
      <span>{{ text }}: </span>
      <b>{{ modelValue }}</b>
    </label>
    <input
      id="priceFrom"
      :value="modelValue"
      :min="priceMin"
      :max="priceMax"
      type="range"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
