<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('example', ['count', 'message']),

    ...mapState('example', { countAlias: 'count', messageAlias: 'message' }),

    // count() {
    //   return this.$store.state.example.count
    // },
    // countAlias () {
    //   return this.$store.state.example.count
    // },
  },
}
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ countAlias }}</h1>
    <h1>{{ messageAlias }}</h1>
  </div>
</template>
