<script>
import SelectAttributes from './SelectAttributes.vue'
import SelectPriceRanges from './SelectPriceRanges.vue'

export default {
  components: { SelectPriceRanges, SelectAttributes },

  props: [
    'modelValue',
    'priceMin',
    'priceMax',
    'priceFrom',
    'priceTo',
    'attributes',
  ],

  emits: [
    'update:modelValue',
    'update:price-from',
    'update:price-to',
    'update:attributes',
  ],
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

      <SelectAttributes
        :model-value="attributes"
        @update:model-value="$emit('update:attributes', $event)"
      />
    </div>
  </div>
</template>
