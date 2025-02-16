<script>
import WidgetHeader from '@/components/WidgetHeader.vue'
import CategoryNavigation from '@/components/CategoryNavigation.vue'
import VerboseFiltration from '../components/VerboseFiltration.vue'
import WidgetFilter from '../components/WidgetFilter.vue'
import WidgetProducts from '../components/WidgetProducts.vue'
import WidgetPaginator from '../components/WidgetPaginator.vue'
import RecentlyViewed from '../components/RecentlyViewed.vue'
import UiLinks from '../ui/UiLinks.vue'
import UiTags from '../ui/UiTags.vue'
import UiCopyright from '../ui/UiCopyright.vue'

export default {
  components: {
    WidgetHeader,
    CategoryNavigation,
    VerboseFiltration,
    WidgetFilter,
    WidgetProducts,
    WidgetPaginator,
    RecentlyViewed,
    UiLinks,
    UiTags,
    UiCopyright,
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
          <UiLinks></UiLinks>
          <UiTags></UiTags>
          <UiCopyright></UiCopyright>
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
