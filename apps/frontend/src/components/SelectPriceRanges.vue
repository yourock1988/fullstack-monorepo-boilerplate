<script>
export default {
  data() {
    return {
      min: 3000,
      max: 9000,
      from: 4000,
      to: 8000,
    }
  },

  watch: {
    from(newValue) {
      if (newValue > this.to) this.to = newValue
    },
    to(newValue) {
      if (newValue < this.from) this.from = newValue
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
      <input id="priceFrom" v-model="from" type="range" :min="min" :max="max" />
    </div>
    <div class="wrap-input-range">
      <label for="priceTo">
        <span>До: </span>
        <b>{{ to }}</b>
      </label>
      <input id="priceTo" v-model="to" type="range" :min="min" :max="max" />
    </div>
  </div>
</template>
