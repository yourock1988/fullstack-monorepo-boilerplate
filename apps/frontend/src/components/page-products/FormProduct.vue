<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      appendableProduct: {
        firstName: 'q',
        secondName: 'qq',
        age: 1,
        isOnBudget: true,
        faculty: 'qqq',
      },
    }
  },

  methods: {
    ...mapActions('products', ['createProduct']),
  },
}
</script>

<template>
  <div class="wrap-form">
    <form @submit.prevent="createProduct(appendableProduct)">
      <div>
        <input v-model="appendableProduct.firstName" />
      </div>
      <div>
        <input v-model="appendableProduct.secondName" />
      </div>
      <div>
        <input v-model="appendableProduct.age" type="number" />
      </div>
      <div>
        <input v-model="appendableProduct.isOnBudget" type="checkbox" />
      </div>
      <div>
        <input v-model="appendableProduct.faculty" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
</template>
