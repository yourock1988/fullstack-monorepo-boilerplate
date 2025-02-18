<script>
import imgLogo from '@/assets/img/logo.png'
import imgLogoFull from '@/assets/img/logo-full.png'
import SelectSearchQuery from './SelectSearchQuery.vue'

export default {
  components: { SelectSearchQuery },

  data() {
    return {
      imgLogo,
      imgLogoFull,
    }
  },
}
</script>

<template>
  <div class="layout-header">
    <header class="wrapper-header layout-centralize">
      <div class="wrap-icon-menu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="wrap-logo">
        <span class="logo-small">
          <img :src="imgLogo" width="50px" alt="" />
        </span>
        <span class="logo-large">
          <img :src="imgLogoFull" height="50px" alt="" />
        </span>
      </div>
      <div class="wrap-button-catalog">
        <button>
          <i class="fa-solid fa-table-cells-large"></i>
          <span>Каталог</span>
        </button>
      </div>

      <SelectSearchQuery />

      <div class="wrap-select-lang">
        <select id="" name="">
          <option value="">EN</option>
          <option value="">RU</option>
          <option value="">UA</option>
        </select>
      </div>
      <div class="wrap-icon-auth">
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="wrap-icon-orders">
        <i class="fa-solid fa-table-list"></i>
      </div>
      <div class="wrap-icon-notifications">
        <i class="fa-regular fa-bell"></i>
      </div>
      <div class="wrap-icon-compare">
        <i class="fa-solid fa-scale-balanced"></i>
      </div>
      <div class="wrap-icon-wishlist">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="wrap-icon-cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  </div>
</template>
