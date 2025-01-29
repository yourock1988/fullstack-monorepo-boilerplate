<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('example', ['increment', 'incrementBy']),

    ...mapMutations('example', {
      incrementAlias: 'increment',
      incrementByAlias: 'incrementBy',
    }),

    // increment() {
    //   this.$store.commit('example/increment', 5)
    // },
    // incrementBy(amount) {
    //   this.$store.commit('example/incrementBy', amount)
    // },
  },
}
</script>

<template>
  <div>
    <button @click="increment">increment</button>
    <button @click="incrementBy(5)">incrementBy</button>
    <button @click="incrementAlias">incrementAlias</button>
    <button @click="incrementByAlias(5)">incrementByAlias</button>
  </div>
</template>
