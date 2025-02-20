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

import products from '@/json/products.json'

import searchProducts from '@/functions/searchProducts'
import rangeProducts from '@/functions/rangeProducts'
import sortProducts from '@/functions/sortProducts'
import paginateProducts from '@/functions/paginateProducts'
import attributeProducts from '@/functions/attributeProducts'

products.forEach(p => {
  p.priceUah = Math.round((p.price * 42) / 100) * 100
})

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
      products: [],
      searchQuery: '',
      priceFrom: 0,
      priceTo: 0,
      sortingType: 'idHightLow',
      currentPage: 0,
      pageSize: 10,
      selectedFilters: [],
    }
  },

  computed: {
    searchedProducts() {
      return searchProducts(this.products, this.searchQuery)
    },

    rangedProducts() {
      return rangeProducts(this.searchedProducts, this.priceFrom, this.priceTo)
    },

    attributedProducts() {
      return attributeProducts(this.rangedProducts, this.selectedFilters)
    },

    sortedProducts() {
      return sortProducts(this.attributedProducts, this.sortingType)
    },

    paginatedProducts() {
      const { sortedProducts, currentPage, pageSize } = this
      return paginateProducts(sortedProducts, currentPage, pageSize)
    },

    pagesTotal() {
      return Math.ceil(this.sortedProducts.length / this.pageSize)
    },

    priceMin() {
      const min = Math.min(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(min) ? min : 0
    },

    priceMax() {
      const max = Math.max(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(max) ? max : Number.MAX_SAFE_INTEGER
    },
  },

  mounted() {
    setTimeout(() => {
      this.products = products
    }, 750)
  },

  methods: {
    changeSelectedFilters(selectedFilters) {
      this.selectedFilters = selectedFilters
    },
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <UiLinetop />

    <WidgetHeader @search-query-changed="searchQuery = $event" />

    <div class="layout-main">
      <div class="layout-centralize">
        <main>
          <UiCategoryNavigation />

          <VerboseFiltration
            @sorting-type-changed="sortingType = $event"
            @page-size-changed="pageSize = $event"
          />

          <div class="layout-catalog">
            <aside class="catalog-filter">
              <SelectPriceRanges
                :price-min="priceMin"
                :price-max="priceMax"
                @price-from-changed="priceFrom = $event"
                @price-to-changed="priceTo = $event"
              />

              <SelectFilterAttributes
                :products="rangedProducts"
                @selected-filters-changed="changeSelectedFilters"
              />
            </aside>

            <div class="catalog-content">
              <SelectCurrentPage
                :pages-total="pagesTotal"
                @current-page-changed="currentPage = $event"
              />

              <WidgetProducts :paginated-products="paginatedProducts" />
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
