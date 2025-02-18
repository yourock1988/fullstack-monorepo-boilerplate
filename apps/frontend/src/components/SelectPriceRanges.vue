<template>
  <div class="price-ranges">
    <h3>Цена</h3>
    <div class="wrap-input-range">
      <label for="price-from">От: <span>3000</span></label>
      <input
        id="price-from"
        type="range"
        name="price-from"
        min="3000"
        max="9000"
        value="3000"
      />
    </div>
    <div class="wrap-input-range">
      <label for="price-to">До: <span>9000</span></label>
      <input
        id="price-to"
        type="range"
        name="price-to"
        min="3000"
        max="9000"
        value="9000"
      />
    </div>
  </div>
</template>
