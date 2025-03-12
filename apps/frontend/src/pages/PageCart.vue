<script>
import '@/assets/css/cart.css'

export default {}
</script>

<template>
  <div class="container-cart">
    <h1>Ваша корзина</h1>

    <div class="cart-items">
      <div class="cart-item">
        <input id="show-menu-01" type="checkbox" />
        <div class="top">
          <div class="item-image">
            <img src="../assets/img/computer.webp" alt="Товар 1" />
          </div>
          <div class="item-details">
            <h2>Офисный ПК Solaris-I</h2>
            <p>Есть в наличии</p>
          </div>
          <div class="item-menu"><label for="show-menu-01">:</label></div>
        </div>

        <div class="bottom">
          <div class="item-counter">
            <button>-</button>
            <input type="text" size="2" value="1" />
            <button>+</button>
          </div>
          <div class="item-price">1000₴</div>
        </div>

        <div class="context-menu">
          <ul>
            <li>
              <i>🎉</i>
              <span>Добавить в желания</span>
            </li>
            <li>
              <i>🧨</i>
              <span>Удалить</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="confirmation">
      <div class="wrapper">
        <div class="total">4500₴</div>
        <div class="wrap-button">
          <button class="checkout-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>
