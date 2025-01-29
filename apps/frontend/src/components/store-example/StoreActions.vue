<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('example', ['timeout', 'getData']),

    ...mapActions('example', {
      timeoutAlias: 'timeout',
      getDataAlias: 'getData',
    }),

    // timeout() {
    //   this.$store.dispatch('example/timeout')
    // },
    // getData() {
    //   this.$store.dispatch('example/getData')
    // },
  },
}
</script>

<template>
  <div>
    <button @click="timeout">timeout</button>
    <button @click="getData">getData</button>
    <button @click="timeoutAlias">timeoutAlias</button>
    <button @click="getDataAlias(42)">getDataAlias</button>
  </div>
</template>
