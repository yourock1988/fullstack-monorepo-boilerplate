<script>
import SelectPriceRanges from './SelectPriceRanges.vue'
import SelectFilterAttributes from './SelectFilterAttributes.vue'

export default {
  components: { SelectPriceRanges, SelectFilterAttributes },
}
</script>

<template>
  <aside class="catalog-filter">
    <SelectPriceRanges />

    <SelectFilterAttributes />
  </aside>
</template>
