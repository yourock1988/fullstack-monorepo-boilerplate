<script>
import PickerAttributes from '~/page-products/pickers/PickerAttributes.vue'
import PickerCurrentPage from '~/page-products/pickers/PickerCurrentPage.vue'
import PickerPriceRanges from '~/page-products/pickers/PickerPriceRanges.vue'
import WatchedProducts from '~/page-products/WatchedProducts.vue'
import WidgetProducts from '~/page-products/WidgetProducts.vue'
import WidgetHeader from '~/page-products/WidgetHeader.vue'
import OffCanvas from '~/page-products/OffCanvas.vue'

import PickerSortingType from '~/page-products/pickers/PickerSortingType.vue'
import PickerPageSize from '~/page-products/pickers/PickerPageSize.vue'
import PickerListType from '~/page-products/pickers/PickerListType.vue'
import PickerAttributesReset from '~/page-products/pickers/PickerAttributesReset.vue'
import ShowFiltratedCount from '~/page-products/ShowFiltratedCount.vue'

import UiCategoryNavigation from '@/ui/page-products/UiCategoryNavigation.vue'
import UiCopyright from '@/ui/page-products/UiCopyright.vue'
import UiLinetop from '@/ui/page-products/UiLinetop.vue'
import UiTapbar from '@/ui/page-products/UiTapbar.vue'
import UiLinks from '@/ui/page-products/UiLinks.vue'
import UiTags from '@/ui/page-products/UiTags.vue'

import convertProductsPrice from '@/functions/convertProductsPrice'
import harvestAttributes from '@/functions/harvestAttributes'

import attributeProducts from '@/functions/attributeProducts'
import paginateProducts from '@/functions/paginateProducts'
import searchProducts from '@/functions/searchProducts'
import rangeProducts from '@/functions/rangeProducts'
import sortProducts from '@/functions/sortProducts'

import { getWatchedProducts } from '@/api/watchedProducts'
import { getProducts } from '@/api/products'

import PickerIsOffcanvasOpen from '~/page-products/pickers/PickerIsOffcanvasOpen.vue'

export default {
  components: {
    PickerIsOffcanvasOpen,

    PickerSortingType,
    PickerListType,
    PickerPageSize,
    ShowFiltratedCount,
    PickerAttributesReset,

    PickerAttributes,
    PickerCurrentPage,
    PickerPriceRanges,
    WatchedProducts,
    WidgetProducts,
    WidgetHeader,
    OffCanvas,
    UiCategoryNavigation,
    UiCopyright,
    UiLinetop,
    UiTapbar,
    UiLinks,
    UiTags,
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

      listType: 'Pave',
      isOffcanvasOpen: false,

      isScrollingDisabled: true,
      ccy: { usdUah: 42 },

      watchedProducts: [],
      products: [],
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

    <WidgetHeader v-model="searchQuery" />

    <div class="layout-main">
      <div class="layout-centralize">
        <main>
          <UiCategoryNavigation />

          <div class="layout-verbose-filtration">
            <PickerIsOffcanvasOpen v-model="isOffcanvasOpen" />

            <ShowFiltratedCount :filtrated-count="filtratedCount" />

            <PickerAttributesReset v-model="attributes" />

            <PickerSortingType @sorting-type-changed="sortingType = $event" />

            <PickerPageSize @page-size-changed="pageSize = $event" />

            <PickerListType @list-type-updated="listType = $event" />
          </div>

          <div id="ccc" class="layout-catalog">
            <aside ref="aside" class="catalog-filter">
              <PickerPriceRanges
                v-model:price-from="priceFrom"
                v-model:price-to="priceTo"
                :price-min="priceMin"
                :price-max="priceMax"
              />

              <PickerAttributes v-model="attributes" />
            </aside>

            <div class="catalog-content">
              <PickerCurrentPage
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
    v-model="isOffcanvasOpen"
    :price-min="priceMin"
    :price-max="priceMax"
  />

  <UiTapbar />
</template>
