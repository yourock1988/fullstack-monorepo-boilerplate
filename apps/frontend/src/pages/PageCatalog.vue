<script>
import WidgetHeader from '@/components/WidgetHeader.vue'
import CategoryNavigation from '@/components/CategoryNavigation.vue'
import VerboseFiltration from '../components/VerboseFiltration.vue'
import WidgetFilter from '../components/WidgetFilter.vue'
import WidgetProducts from '../components/WidgetProducts.vue'
import WidgetPaginator from '../components/WidgetPaginator.vue'
import RecentlyViewed from '../components/RecentlyViewed.vue'

export default {
  components: {
    WidgetHeader,
    CategoryNavigation,
    VerboseFiltration,
    WidgetFilter,
    WidgetProducts,
    WidgetPaginator,
    RecentlyViewed,
  },

  data() {
    return {}
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-linetop">
      <span>Скидки 99% на все товары!</span>
    </div>
    <WidgetHeader></WidgetHeader>
    <div class="layout-main">
      <div class="layout-centralize">
        <main>
          <CategoryNavigation></CategoryNavigation>
          <VerboseFiltration></VerboseFiltration>
          <div class="layout-catalog">
            <WidgetFilter></WidgetFilter>
            <div class="catalog-content">
              <WidgetProducts></WidgetProducts>
              <WidgetPaginator></WidgetPaginator>
            </div>
          </div>
        </main>
        <RecentlyViewed></RecentlyViewed>
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
