<script>
import WidgetHeader from '@/components/WidgetHeader.vue'
import UiCategoryNavigation from '@/ui/UiCategoryNavigation.vue'
import VerboseFiltration from '@/components/VerboseFiltration.vue'
import WidgetProducts from '@/components/WidgetProducts.vue'
import SelectCurrentPage from '@/components/SelectCurrentPage.vue'
import RecentlyViewed from '@/components/RecentlyViewed.vue'
import UiLinks from '@/ui/UiLinks.vue'
import UiTags from '@/ui/UiTags.vue'
import UiCopyright from '@/ui/UiCopyright.vue'
import UiTapbar from '@/ui/UiTapbar.vue'
import UiLinetop from '@/ui/UiLinetop.vue'
import SelectPriceRanges from '@/components/SelectPriceRanges.vue'
import SelectFilterAttributes from '@/components/SelectFilterAttributes.vue'

export default {
  components: {
    WidgetHeader,
    UiCategoryNavigation,
    VerboseFiltration,
    WidgetProducts,
    SelectCurrentPage,
    RecentlyViewed,
    UiLinks,
    UiTags,
    UiCopyright,
    UiTapbar,
    UiLinetop,
    SelectPriceRanges,
    SelectFilterAttributes,
  },

  data() {
    return {
      searchQuery: '',
      sortingType: 'idHightLow',
      pageSize: 10,
      currentPage: 0,
      pagesTotal: 1,
      priceMin: 0,
      priceMax: Number.MAX_SAFE_INTEGER,
      priceFrom: 0,
      priceTo: Number.MAX_SAFE_INTEGER,
    }
  },

  methods: {
    changeSearchQuery(searchQuery) {
      this.searchQuery = searchQuery
    },

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

    changePriceMin(priceMin) {
      this.priceMin = priceMin
    },

    changePriceMax(priceMax) {
      this.priceMax = priceMax
    },

    changePriceFrom(priceFrom) {
      this.priceFrom = priceFrom
    },

    changePriceTo(priceTo) {
      this.priceTo = priceTo
    },
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <UiLinetop />

    <WidgetHeader @search-query-changed="changeSearchQuery" />

    <div class="layout-main">
      <div class="layout-centralize">
        <main>
          <UiCategoryNavigation />

          <VerboseFiltration
            @sorting-type-changed="changeSortingType"
            @page-size-changed="changePageSize"
          />

          <div class="layout-catalog">
            <aside class="catalog-filter">
              <SelectPriceRanges
                :price-min="priceMin"
                :price-max="priceMax"
                @price-from-changed="changePriceFrom"
                @price-to-changed="changePriceTo"
              />

              <SelectFilterAttributes />
            </aside>

            <div class="catalog-content">
              <SelectCurrentPage
                :pages-total="pagesTotal"
                @current-page-changed="changeCurrentPage"
              />

              <WidgetProducts
                :search-query="searchQuery"
                :sorting-type="sortingType"
                :page-size="pageSize"
                :current-page="currentPage"
                @pages-total-changed="changePagesTotal"
                @price-min-changed="changePriceMin"
                @price-max-changed="changePriceMax"
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
