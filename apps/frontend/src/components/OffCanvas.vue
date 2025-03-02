<script>
import SelectPriceRanges from './SelectPriceRanges.vue'

export default {
  components: { SelectPriceRanges },

  props: ['modelValue', 'priceMin', 'priceMax', 'priceFrom', 'priceTo'],

  emits: ['update:modelValue', 'update:price-from', 'update:price-to'],
}
</script>

<template>
  <div
    v-if="modelValue"
    class="backdrop"
    @click="$emit('update:modelValue', false)"
  >
    <div class="offcanvas" @click.stop>
      <SelectPriceRanges
        :price-min="priceMin"
        :price-max="priceMax"
        :price-from="priceFrom"
        :price-to="priceTo"
        @update:price-from="$emit('update:price-from', $event)"
        @update:price-to="$emit('update:price-to', $event)"
      />
    </div>
  </div>
</template>
