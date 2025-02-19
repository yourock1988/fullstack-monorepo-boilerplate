<script>
export default {
  props: ['minPrice', 'maxPrice'],

  emits: ['price-from-changed', 'price-to-changed'],

  data() {
    return {
      priceFrom: 0,
      priceTo: Number.MAX_SAFE_INTEGER,
    }
  },

  watch: {
    minPrice(newValue) {
      if (newValue > this.priceFrom) this.priceFrom = newValue
    },

    maxPrice(newValue) {
      if (newValue < this.priceTo) this.priceTo = newValue
    },

    priceFrom(newValue) {
      this.$nextTick(() => {
        if (newValue > this.priceTo) this.priceTo = newValue
      })

      this.$emit('price-from-changed', this.priceFrom)
    },

    priceTo(newValue) {
      this.$nextTick(() => {
        if (newValue < this.priceFrom) this.priceFrom = newValue
      })

      this.$emit('price-to-changed', this.priceTo)
    },
  },
}
</script>

<template>
  <div class="price-ranges">
    <h3>Цена</h3>
    <div class="wrap-input-range">
      <label for="priceFrom">
        <span>От: </span>
        <b>{{ priceFrom }}</b>
      </label>
      <input
        id="priceFrom"
        v-model.number="priceFrom"
        :min="minPrice"
        :max="maxPrice"
        type="range"
      />
    </div>
    <div class="wrap-input-range">
      <label for="priceTo">
        <span>До: </span>
        <b>{{ priceTo }}</b>
      </label>
      <input
        id="priceTo"
        v-model.number="priceTo"
        :min="minPrice"
        :max="maxPrice"
        type="range"
      />
    </div>
  </div>
</template>
