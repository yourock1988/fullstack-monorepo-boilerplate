<script>
import WidgetHeader from '@/components/WidgetHeader.vue'
import UiCategoryNavigation from '@/ui/UiCategoryNavigation.vue'
import VerboseFiltration from '@/components/VerboseFiltration.vue'
import WidgetFilter from '@/components/WidgetFilter.vue'
import WidgetProducts from '@/components/WidgetProducts.vue'
import WidgetPaginator from '@/components/WidgetPaginator.vue'
import RecentlyViewed from '@/components/RecentlyViewed.vue'
import UiLinks from '@/ui/UiLinks.vue'
import UiTags from '@/ui/UiTags.vue'
import UiCopyright from '@/ui/UiCopyright.vue'
import UiTapbar from '@/ui/UiTapbar.vue'
import UiLinetop from '@/ui/UiLinetop.vue'

export default {
  components: {
    WidgetHeader,
    UiCategoryNavigation,
    VerboseFiltration,
    WidgetFilter,
    WidgetProducts,
    WidgetPaginator,
    RecentlyViewed,
    UiLinks,
    UiTags,
    UiCopyright,
    UiTapbar,
    UiLinetop,
  },

  data() {
    return {}
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <UiLinetop />
    <WidgetHeader />
    <div class="layout-main">
      <div class="layout-centralize">
        <main>
          <UiCategoryNavigation />
          <VerboseFiltration />
          <div class="layout-catalog">
            <WidgetFilter />
            <div class="catalog-content">
              <WidgetProducts />
              <WidgetPaginator />
            </div>
          </div>
        </main>
        <RecentlyViewed />
      </div>
    </div>
    <div class="layout-footer">
      <div class="line-downloads"></div>
      <div class="layout-centralize">
        <footer>
          <UiLinks />
          <UiTags />
          <UiCopyright />
        </footer>
      </div>
    </div>
  </div>
  <UiTapbar />
</template>
