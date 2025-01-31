<script>
import FormProduct from '@/components/page-products/FormProduct.vue'
import TableProducts from '@/components/page-products/TableProducts.vue'

export default {
  components: { TableProducts, FormProduct },
}
</script>

<template>
  <div>
    <table-products></table-products>
    <form-product></form-product>
  </div>
</template>
