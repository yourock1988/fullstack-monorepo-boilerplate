<script>
import FooBar from './components/FooBar.vue'
export default {
  components: { FooBar },
  data() {
    return {
      n: 42,
    }
  },
}
</script>

<template>
  <div>
    <h1 @click="n++">App.vue</h1>
    <h2>{{ n }}</h2>
    <foo-bar></foo-bar>
  </div>
</template>
