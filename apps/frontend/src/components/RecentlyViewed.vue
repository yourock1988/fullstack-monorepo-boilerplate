<script>
import imgComputer from '@/assets/img/computer.webp'
import imgComputerRotated from '@/assets/img/computer-rotated.webp'
import TileProduct from './TileProduct.vue'

export default {
  components: { TileProduct },

  props: ['recentlyViewedProducts'],

  data() {
    return {
      imgComputer,
      imgComputerRotated,
    }
  },
}
</script>

<template>
  <div class="recently-viewed">
    <h3>Последние просмотренные товары</h3>
    <ul class="products">
      <TileProduct
        v-if="recentlyViewedProducts[0]"
        :product="recentlyViewedProducts[0]"
      />

      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputer" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputerRotated" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputer" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputerRotated" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputer" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputer" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputer" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputer" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="product">
        <div class="wrap-sale"><span>АКЦИЯ</span></div>
        <div class="box">
          <div class="top">
            <div class="wrap-img">
              <img :src="imgComputer" />
            </div>
          </div>
          <div class="bottom">
            <div class="wrap-colors"></div>
            <div class="wrap-title">
              <span>Компьютер HAL-9000</span>
            </div>
            <div class="wrap-leave-comment">
              <span>💬Оставить отзыв</span>
            </div>
            <div class="wrap-is-available">
              <span>Есть в наличии</span>
            </div>
            <div class="wrap-buy">
              <div class="price">180 000₴</div>
              <div class="icon-cart">
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
