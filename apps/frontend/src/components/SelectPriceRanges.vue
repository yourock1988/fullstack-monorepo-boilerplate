<script>
export default {
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
        :min="priceMin"
        :max="priceMax"
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
        :min="priceMin"
        :max="priceMax"
        type="range"
      />
    </div>
  </div>
</template>
