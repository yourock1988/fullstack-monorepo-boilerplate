<script>
import WidgetHeader from '@/components/WidgetHeader.vue'
import UiCategoryNavigation from '@/ui/UiCategoryNavigation.vue'
import VerboseFiltration from '@/components/VerboseFiltration.vue'
import WidgetFilter from '@/components/WidgetFilter.vue'
import WidgetProducts from '@/components/WidgetProducts.vue'
import SelectCurrentPage from '@/components/SelectCurrentPage.vue'
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
    SelectCurrentPage,
    RecentlyViewed,
    UiLinks,
    UiTags,
    UiCopyright,
    UiTapbar,
    UiLinetop,
  },

  data() {
    return {
      sortingType: 'idHightLow',
      pageSize: 10,
      currentPage: 0,
      pagesTotal: 3,
    }
  },

  methods: {
    changeSortingType(sortingType) {
      this.sortingType = sortingType
    },

    changePageSize(pageSize) {
      this.pageSize = pageSize
    },

    changeCurrentPage(currentPage) {
      this.currentPage = currentPage
    },

    changePagesTotal(pagesTotal) {
      this.pagesTotal = pagesTotal
    },
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

          <VerboseFiltration
            @sorting-type-changed="changeSortingType"
            @page-size-changed="changePageSize"
          />

          <div class="layout-catalog">
            <WidgetFilter />

            <div class="catalog-content">
              <SelectCurrentPage
                :pages-total="pagesTotal"
                @current-page-changed="changeCurrentPage"
              />

              <WidgetProducts
                :sorting-type="sortingType"
                :page-size="pageSize"
                :current-page="currentPage"
                @pages-total-changed="changePagesTotal"
              />
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
