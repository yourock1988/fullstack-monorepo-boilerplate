<script>
export default {
  props: ['minPrice', 'maxPrice'],

  data() {
    return {
      from: 0,
      to: Number.MAX_SAFE_INTEGER,
    }
  },

  watch: {
    minPrice(newValue) {
      if (newValue > this.from) this.from = newValue
    },

    maxPrice(newValue) {
      if (newValue < this.to) this.to = newValue
    },

    from(newValue) {
      this.$nextTick(() => {
        if (newValue > this.to) this.to = newValue
      })
    },

    to(newValue) {
      this.$nextTick(() => {
        if (newValue < this.from) this.from = newValue
      })
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
        <b>{{ from }}</b>
      </label>
      <input
        id="priceFrom"
        v-model.number="from"
        :min="minPrice"
        :max="maxPrice"
        type="range"
      />
    </div>
    <div class="wrap-input-range">
      <label for="priceTo">
        <span>До: </span>
        <b>{{ to }}</b>
      </label>
      <input
        id="priceTo"
        v-model.number="to"
        :min="minPrice"
        :max="maxPrice"
        type="range"
      />
    </div>
  </div>
</template>
