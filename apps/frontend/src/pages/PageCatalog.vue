<script>
import imgLogo from '@/assets/img/logo.png'
import imgLogoFull from '@/assets/img/logo-full.png'
import imgComputer from '@/assets/img/computer.webp'
import imgComputerRotated from '@/assets/img/computer-rotated.webp'

export default {
  data() {
    return {
      imgLogo,
      imgLogoFull,
      imgComputer,
      imgComputerRotated,
    }
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-linetop">
      <span>Скидки 99% на все товары!</span>
    </div>
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
        <div class="wrap-search">
          <input type="search" /><button>Найти</button>
        </div>
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
    <div class="layout-main">
      <div class="layout-centralize">
        <main>
          <div class="layout-category-navigation">
            <div class="category-path">
              <span class="short-path"
                ><i class="fa-solid fa-arrow-left"></i> Собранные
                компьютеры</span
              >
              <span class="long-path"
                ><i class="fa-solid fa-house"></i> / Компьютеры и ноутбуки /
                Собранные компьютеры</span
              >
            </div>
            <div class="category-caption">
              <h2>Собранные компьютеры</h2>
            </div>
          </div>
          <div class="layout-verbose-filtration">
            <div class="wrap-button-show-filters">
              <button id="elButtonShowFilters">Фильтры</button>
            </div>
            <div class="wrap-span-filtrated-items-count">
              <span id="elSpanFiltratedItemsCount">Найдено 4000 товаров</span>
            </div>
            <div class="wrap-filter-resets">
              <button>Сбросить</button>
              <button>GeForce RTX 3060 x</button>
            </div>
            <div class="wrap-select-items-on-page">
              <span>По</span>
              <select id="elSelectItemsOnPage" class="select-items-on-page">
                <option value="">30</option>
                <option value="">60</option>
                <option value="">90</option>
              </select>
              <span>на странице</span>
            </div>
            <div class="wrap-select-sorting-type">
              <select id="elSelectSortingType" class="select-sorting-type">
                <option value="">По рейтингу</option>
                <option value="">От дорогих к дешевым</option>
                <option value="">От дешевых к дорогим</option>
                <option value="">Новинки</option>
              </select>
            </div>
            <div class="wrap-picker-tile-style">
              <div id="elPickerTileStyle" class="picker-tile-style">
                <input id="s-grid" type="radio" name="tile-style" checked />
                <input id="s-table" type="radio" name="tile-style" />
                <input id="s-list" type="radio" name="tile-style" />
                <label for="s-grid">
                  <i class="fa-brands fa-microsoft"></i>
                </label>
                <label for="s-table">
                  <i class="fa-solid fa-table"></i>
                </label>
                <label for="s-list">
                  <i class="fa-solid fa-water"></i>
                </label>
              </div>
            </div>
          </div>
          <div class="layout-catalog">
            <aside class="catalog-filter">
              <h3>Фильтры</h3>
              <dl class="filter-attribute">
                <dt><h4>Видеокарта</h4></dt>
                <dd>
                  <ul>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_01" type="checkbox" />
                        <label for="chk_01">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 <sup>(10)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_02" type="checkbox" />
                        <label for="chk_02">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_03" type="checkbox" />
                        <label for="chk_03">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 4070 <sup>(15)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_04" type="checkbox" />
                        <label for="chk_04">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 <sup>(3)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_05" type="checkbox" />
                        <label for="chk_05">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="filter-attribute">
                <dt><h4>Видеокарта</h4></dt>
                <dd>
                  <ul>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_01" type="checkbox" />
                        <label for="chk_01">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 <sup>(10)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_02" type="checkbox" />
                        <label for="chk_02">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_03" type="checkbox" />
                        <label for="chk_03">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 4070 <sup>(15)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_04" type="checkbox" />
                        <label for="chk_04">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 <sup>(3)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_05" type="checkbox" />
                        <label for="chk_05">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="filter-attribute">
                <dt><h4>Видеокарта</h4></dt>
                <dd>
                  <ul>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_01" type="checkbox" />
                        <label for="chk_01">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 <sup>(10)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_02" type="checkbox" />
                        <label for="chk_02">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_03" type="checkbox" />
                        <label for="chk_03">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 4070 <sup>(15)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_04" type="checkbox" />
                        <label for="chk_04">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 <sup>(3)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_05" type="checkbox" />
                        <label for="chk_05">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="filter-attribute">
                <dt><h4>Видеокарта</h4></dt>
                <dd>
                  <ul>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_01" type="checkbox" />
                        <label for="chk_01">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 <sup>(10)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_02" type="checkbox" />
                        <label for="chk_02">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_03" type="checkbox" />
                        <label for="chk_03">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 4070 <sup>(15)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_04" type="checkbox" />
                        <label for="chk_04">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 <sup>(3)</sup></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="wrap-checkbox-fa">
                        <input id="chk_05" type="checkbox" />
                        <label for="chk_05">
                          <i class="fa-solid fa-square-check"></i>
                          <i class="fa-solid fa-square"></i>
                          <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </dd>
              </dl>
            </aside>
            <div class="catalog-content">
              <ul class="products">
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
              <div class="wrap-paginator">
                <ul class="paginator">
                  <li class="selected">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <div class="recently-viewed">
          <h3>Последние просмотренные товары</h3>
          <ul class="products">
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
      </div>
    </div>
    <div class="layout-footer">
      <div class="line-downloads"></div>
      <div class="layout-centralize">
        <footer>
          <div class="layout-links">
            <div class="links-schedule">
              <b>График работы Call-центра</b>
            </div>
            <div class="links-information">
              <div>Информация о компании</div>
              <div>О нас</div>
              <div>Условия использования сайта</div>
              <div>Вакансии</div>
              <div>Контакты</div>
              <div>Все категории</div>
            </div>
            <div class="links-help">
              <div>Помощь</div>
              <div>Доставка и оплата</div>
              <div>Кредит</div>
              <div>Гарантия</div>
              <div>Возврат товара</div>
              <div>Сервисные центры</div>
            </div>
            <div class="links-services">
              <div>Сервисы</div>
              <div>Бонусный счёт</div>
              <div>Подарочные сертификаты</div>
              <div>pc-shop обмен</div>
              <div>Корпоративным клиентам</div>
            </div>
            <div class="links-partners">
              <div>Партнерам</div>
              <div>Продавать на pc-shop</div>
              <div>Сотрудничество с нами</div>
              <div>Франчайзинг</div>
              <div>Аренда помещений</div>
            </div>
          </div>
          <div class="tags-list">
            <button>ноутбук</button>
            <button>компьютер</button>
            <button>процессор</button>
            <button>видеокарта</button>
            <button>смартфон</button>
            <button>планшет</button>
          </div>
          <div class="copyright">
            <span>© 1729-2025 Все права запрещены</span>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <div class="tapbar">
    <div class="wrap-tap">
      <i class="fa-solid fa-table-cells-large"></i>
    </div>
    <div class="wrap-tap">
      <i class="fa-solid fa-table-list"></i>
    </div>
    <div class="wrap-tap">
      <i class="fa-regular fa-bell"></i>
    </div>
    <div class="wrap-tap">
      <i class="fa-solid fa-scale-balanced"></i>
    </div>
    <div class="wrap-tap">
      <i class="fa-regular fa-heart"></i>
    </div>
  </div>
</template>
