<script>
import FooBar from './components/FooBar.vue'
export default {
  components: { FooBar },
  data() {
    return {
      n: 42,
    }
  },

  methods: {
    increment() {
      this.$store.commit('example/increment')
      console.log(this.$store.getters['example/getCount'])

      console.log(this.$store.state.example.count)
    },
  },
}
</script>

<template>
  <div>
    <h1 @click="increment">App.vue</h1>
    <h2>{{ n }}</h2>
    <foo-bar></foo-bar>
  </div>
</template>
