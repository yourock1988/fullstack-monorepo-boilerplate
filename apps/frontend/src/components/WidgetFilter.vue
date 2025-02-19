<script>
import SelectPriceRanges from './SelectPriceRanges.vue'
import SelectFilterAttributes from './SelectFilterAttributes.vue'

export default {
  components: { SelectPriceRanges, SelectFilterAttributes },

  props: ['minPrice', 'maxPrice'],
}
</script>

<template>
  <aside class="catalog-filter">
    <SelectPriceRanges :min-price="minPrice" :max-price="maxPrice" />

    <SelectFilterAttributes />
  </aside>
</template>
