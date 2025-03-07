<script>
import UiCategoryNavigation from '@/ui/page-products/UiCategoryNavigation.vue'
import ShowWatchedProducts from '~/page-products/ShowWatchedProducts.vue'

import '@/assets/css/product-card.css'
import imgComputer from '@/assets/img/computer.webp'
import { mapGetters } from 'vuex'

export default {
  components: { UiCategoryNavigation, ShowWatchedProducts },

  props: ['id'],

  data() {
    return {
      imgComputer,
    }
  },

  computed: {
    ...mapGetters('watchedProducts', ['watchedProducts']),
  },

  mounted() {
    this.$store.dispatch('watchedProducts/readWatchedProducts')
  },
}
</script>

<template>
  <div>
    <div class="layout-main">
      <div class="layout-centralize">
        <main>
          <UiCategoryNavigation />
          <div class="product-card">
            <div class="slider-photos">
              <div class="photo">
                <img :src="imgComputer" alt="" />
              </div>
              <div class="photos">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="about-text">
              <div class="caption">
                <h2>this is template for product card {{ id }}</h2>
              </div>
              <div class="feedback">
                <span> Оставить отзыв </span>
              </div>
              <div class="available">
                <span> Есть в наличии </span>
              </div>
              <div class="price">
                <span> 123 456 ₴ </span>
              </div>
              <div class="buy">
                <button>Купить</button>
              </div>
              <div class="delivery">
                <span> Доставка </span>
                <div>
                  <span> в <b> Киев </b> </span>
                  <div>
                    <span> Курьером </span>
                  </div>
                  <div>
                    <span> Самовывоз </span>
                  </div>
                </div>
              </div>
              <div class="payment">
                <span> Оплата </span>
                <p>
                  Картой онлайн, Оплата при получении товара, Оплата картой в
                  отделении, Google Pay
                </p>
              </div>
              <div class="varranty">
                <span> Гарантия </span>
                <p>
                  Гарантия. 38 месяцев Обмен/возврат товара в течение 14 дней
                </p>
              </div>
            </div>
          </div>
        </main>
        <ShowWatchedProducts :products="watchedProducts" />
      </div>
    </div>
  </div>
</template>
