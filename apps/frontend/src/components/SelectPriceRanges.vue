<script>
import InputRange from './InputRange.vue'

export default {
  components: { InputRange },

  props: ['priceMin', 'priceMax'],

  emits: ['price-from-changed', 'price-to-changed'],

  data() {
    return {
      priceFrom: 0,
      priceTo: 0,
    }
  },

  watch: {
    priceMin(newValue) {
      if (newValue > this.priceFrom) this.priceFrom = newValue
      this.$nextTick(() => {
        if (newValue === this.priceTo) this.priceTo = this.priceMax
      })
    },

    priceMax(newValue) {
      if (newValue < this.priceTo) this.priceTo = newValue
      this.$nextTick(() => {
        if (newValue === this.priceFrom) this.priceFrom = this.priceMin
      })
    },

    priceFrom(newValue) {
      if (newValue > this.priceTo) this.priceTo = newValue
      this.$emit('price-from-changed', this.priceFrom)
    },

    priceTo(newValue) {
      if (newValue < this.priceFrom) this.priceFrom = newValue
      this.$emit('price-to-changed', this.priceTo)
    },
  },

  mounted() {
    this.$emit('price-from-changed', this.priceFrom)
    this.$emit('price-to-changed', this.priceTo)
  },
}
</script>

<template>
  <div class="price-ranges">
    <h3>Цена</h3>

    <InputRange
      v-model.number="priceFrom"
      :price-min="priceMin"
      :price-max="priceMax"
      text="От"
    />

    <InputRange
      v-model.number="priceTo"
      :price-min="priceMin"
      :price-max="priceMax"
      text="До"
    />
  </div>
</template>
