<script>
import WidgetHeader from '@/components/page-products/WidgetHeader.vue'
import VerboseFiltration from '@/components/page-products/VerboseFiltration.vue'
import WidgetProducts from '@/components/page-products/WidgetProducts.vue'
import SelectCurrentPage from '@/components/page-products/SelectCurrentPage.vue'
import WatchedProducts from '@/components/page-products/WatchedProducts.vue'
import SelectPriceRanges from '@/components/page-products/SelectPriceRanges.vue'
import SelectAttributes from '@/components/page-products/SelectAttributes.vue'
import OffCanvas from '@/components/page-products/OffCanvas.vue'

import UiCategoryNavigation from '@/ui/page-products/UiCategoryNavigation.vue'
import UiLinks from '@/ui/page-products/UiLinks.vue'
import UiTags from '@/ui/page-products/UiTags.vue'
import UiCopyright from '@/ui/page-products/UiCopyright.vue'
import UiTapbar from '@/ui/page-products/UiTapbar.vue'
import UiLinetop from '@/ui/page-products/UiLinetop.vue'

import searchProducts from '@/functions/searchProducts'
import rangeProducts from '@/functions/rangeProducts'
import sortProducts from '@/functions/sortProducts'
import paginateProducts from '@/functions/paginateProducts'
import attributeProducts from '@/functions/attributeProducts'

import harvestAttributes from '@/functions/harvestAttributes'
import convertProductsPrice from '@/functions/convertProductsPrice'

import { getProducts } from '@/api/products'
import { getWatchedProducts } from '@/api/watchedProducts'

export default {
  components: {
    WidgetHeader,
    UiCategoryNavigation,
    VerboseFiltration,
    WidgetProducts,
    SelectCurrentPage,
    WatchedProducts,
    UiLinks,
    UiTags,
    UiCopyright,
    UiTapbar,
    UiLinetop,
    SelectPriceRanges,
    SelectAttributes,
    OffCanvas,
  },

  data() {
    return {
      searchQuery: '',
      priceFrom: 0,
      priceTo: 0,
      sortingType: 'idHightLow',
      currentPage: 0,
      pageSize: 10,
      attributes: [],
      watchedProducts: [],
      products: [],
      isScrollingDisabled: true,
      ccy: { usdUah: 42 },
      isShowOffcanvas: false,
      listType: 'Pave',
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
      return attributeProducts(this.rangedProducts, this.attributes)
    },

    sortedProducts() {
      return sortProducts(this.attributedProducts, this.sortingType)
    },

    paginatedProducts() {
      const { sortedProducts, currentPage, pageSize } = this
      return paginateProducts(sortedProducts, currentPage, pageSize)
    },

    pagesTotal() {
      return Math.ceil(this.filtratedCount / this.pageSize)
    },

    priceMin() {
      const min = Math.min(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(min) ? min : 0
    },

    priceMax() {
      const max = Math.max(...this.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(max) ? max : Number.MAX_SAFE_INTEGER
    },

    filtratedCount() {
      return this.sortedProducts.length
    },
  },

  watch: {
    searchedProducts() {
      this.attributes = harvestAttributes(this.searchedProducts)
    },

    attributes() {
      this.scrollToAsideBottom()
    },
  },

  mounted() {
    this.loadProducts()
    this.loadWatchedProducts()
  },

  methods: {
    async loadWatchedProducts() {
      this.watchedProducts = await getWatchedProducts()
      convertProductsPrice(this.watchedProducts, this.ccy)
    },

    async loadProducts() {
      this.products = await getProducts()
      convertProductsPrice(this.products, this.ccy)
      setTimeout(() => {
        this.isScrollingDisabled = false
      }, 100)
    },

    scrollToAsideBottom() {
      if (this.isScrollingDisabled) return
      this.$refs.aside.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
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
            v-model="attributes"
            :filtrated-count="filtratedCount"
            @sorting-type-changed="sortingType = $event"
            @page-size-changed="pageSize = $event"
            @offcanvas-show="isShowOffcanvas = true"
            @list-type-updated="listType = $event"
          />

          <div id="ccc" class="layout-catalog">
            <aside ref="aside" class="catalog-filter">
              <SelectPriceRanges
                v-model:price-from="priceFrom"
                v-model:price-to="priceTo"
                :price-min="priceMin"
                :price-max="priceMax"
              />

              <SelectAttributes v-model="attributes" />
            </aside>

            <div class="catalog-content">
              <SelectCurrentPage
                :pages-total="pagesTotal"
                @current-page-changed="currentPage = $event"
              />

              <WidgetProducts
                :products="paginatedProducts"
                :list-type="listType"
              />
            </div>
          </div>
        </main>

        <WatchedProducts :products="watchedProducts" />
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

  <OffCanvas
    v-model:attributes="attributes"
    v-model:price-from="priceFrom"
    v-model:price-to="priceTo"
    v-model="isShowOffcanvas"
    :price-min="priceMin"
    :price-max="priceMax"
  />

  <UiTapbar />
</template>
