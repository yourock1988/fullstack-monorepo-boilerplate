<script>
import PickerPageSize from '~/page-products/pickers/PickerPageSize.vue'
import PickerListType from '~/page-products/pickers/PickerListType.vue'
import PickerAttributes from '~/page-products/pickers/PickerAttributes.vue'
import PickerCurrentPage from '~/page-products/pickers/PickerCurrentPage.vue'
import PickerPriceRanges from '~/page-products/pickers/PickerPriceRanges.vue'
import PickerSortingType from '~/page-products/pickers/PickerSortingType.vue'
import PickerAttributesReset from '~/page-products/pickers/PickerAttributesReset.vue'
import PickerIsOffcanvasOpen from '~/page-products/pickers/PickerIsOffcanvasOpen.vue'

import ShowPaginatedProducts from '~/page-products/ShowPaginatedProducts.vue'
import ShowWatchedProducts from '~/page-products/ShowWatchedProducts.vue'
import ShowFiltratedCount from '~/page-products/ShowFiltratedCount.vue'
import WidgetHeader from '~/page-products/WidgetHeader.vue'
import OffCanvas from '~/page-products/OffCanvas.vue'

import UiCategoryNavigation from '@/ui/page-products/UiCategoryNavigation.vue'
import UiCopyright from '@/ui/page-products/UiCopyright.vue'
import UiLinetop from '@/ui/page-products/UiLinetop.vue'
import UiTapbar from '@/ui/page-products/UiTapbar.vue'
import UiLinks from '@/ui/page-products/UiLinks.vue'
import UiTags from '@/ui/page-products/UiTags.vue'

import convertProductsPrice from '@/functions/convertProductsPrice'
import harvestAttributes from '@/functions/harvestAttributes'

import paginateProducts from '@/functions/paginateProducts'

import { getWatchedProducts } from '@/api/watchedProducts'

import { mapGetters } from 'vuex'
import interlinkedWithin from '@/functions/interlinkedWithin'

export default {
  components: {
    PickerPageSize,
    PickerListType,
    PickerAttributes,
    PickerCurrentPage,
    PickerPriceRanges,
    PickerSortingType,
    PickerAttributesReset,
    PickerIsOffcanvasOpen,

    ShowPaginatedProducts,
    ShowWatchedProducts,
    ShowFiltratedCount,
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
      currentPage: 0,
      pageSize: 10,

      listType: 'Pave',
      isOffcanvasOpen: false,
      isScrollingDisabled: true,

      ccy: { usdUah: 42 },
      watchedProducts: [],
    }
  },

  computed: {
    ...interlinkedWithin('products', [
      { searchQuery: 'SET_SEARCH_QUERY' },
      { priceFrom: 'SET_PRICE_FROM' },
      { priceTo: 'SET_PRICE_TO' },
      { attributes: 'SET_ATTRIBUTES' },
      { sortingType: 'SET_SORTING_TYPE' },
    ]),

    ...mapGetters('products', [
      'searchedProducts',
      'rangedProducts',
      'attributedProducts',
      'sortedProducts',
    ]),

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
      await this.$store.dispatch('products/readProducts')
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

            <PickerSortingType v-model="sortingType" />

            <PickerPageSize v-model="pageSize" />

            <PickerListType v-model="listType" />
          </div>

          <div class="layout-catalog">
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
                v-model="currentPage"
                :pages-total="pagesTotal"
              />

              <ShowPaginatedProducts
                :products="paginatedProducts"
                :list-type="listType"
              />
            </div>
          </div>
        </main>

        <ShowWatchedProducts :products="watchedProducts" />
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
