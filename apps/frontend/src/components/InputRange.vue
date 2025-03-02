<script>
export default {
  props: ['priceMin', 'priceMax', 'text', 'modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      id: `id${(Math.random() * 0xff ** 4).toFixed()}`,
    }
  },
}
</script>

<template>
  <div class="wrap-input-range">
    <label :for="id">
      <span>{{ text }}: </span>
      <b>{{ modelValue }}</b>
    </label>
    <input
      :id="id"
      type="range"
      :min="priceMin"
      :max="priceMax"
      :value="modelValue"
      @input="$emit('update:modelValue', +$event.target.value)"
    />
  </div>
</template>
