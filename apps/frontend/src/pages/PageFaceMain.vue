<script>
import state from '@/functions/state'
import WidgetHeader from '~/page-products/WidgetHeader.vue'
import UiCopyright from '@/ui/page-products/UiCopyright.vue'
import UiLinetop from '@/ui/page-products/UiLinetop.vue'
import UiTapbar from '@/ui/page-products/UiTapbar.vue'
import UiLinks from '@/ui/page-products/UiLinks.vue'
import UiTags from '@/ui/page-products/UiTags.vue'

export default {
  components: {
    WidgetHeader,
    UiCopyright,
    UiLinetop,
    UiTapbar,
    UiLinks,
    UiTags,
  },

  computed: {
    searchQuery: state('products', 'searchQuery', 'setSearchQuery', true),
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <UiLinetop />

    <WidgetHeader v-model="searchQuery" />

    <RouterView />

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
