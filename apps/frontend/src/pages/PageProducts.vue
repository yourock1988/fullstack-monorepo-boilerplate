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
import state from '@/functions/state'
import { getWatchedProducts } from '@/api/watchedProducts'
import { mapGetters } from 'vuex'

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
      listType: 'Pave',
      isOffcanvasOpen: false,
      isScrollingDisabled: true,

      ccy: { usdUah: 42 },
      watchedProducts: [],
    }
  },

  computed: {
    searchQuery: state('products', 'searchQuery', 'setSearchQuery', true),
    sortingType: state('products', 'sortingType', 'SET_SORTING_TYPE'),
    currentPage: state('products', 'currentPage', 'SET_CURRENT_PAGE'),
    attributes: state('products', 'attributes', 'SET_ATTRIBUTES'),
    priceFrom: state('products', 'priceFrom', 'SET_PRICE_FROM'),
    pageSize: state('products', 'pageSize', 'SET_PAGE_SIZE'),
    priceTo: state('products', 'priceTo', 'SET_PRICE_TO'),

    ...mapGetters('products', [
      'paginatedProducts',
      'filtratedCount',
      'pagesTotal',
      'priceMin',
      'priceMax',
    ]),
  },

  watch: {
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
                :paginated-products="paginatedProducts"
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
