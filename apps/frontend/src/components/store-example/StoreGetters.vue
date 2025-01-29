<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('example', ['getCount', 'getMessage']),

    ...mapGetters('example', {
      getCountAlias: 'getCount',
      getMessageAlias: 'getMessage',
    }),

    // getCount() {
    //   return this.$store.getters['example/getCount']
    // },
    // getMessage() {
    //   return this.$store.getters['example/getMessage']
    // },
  },
}
</script>

<template>
  <div>
    <h2>{{ getCount }}</h2>
    <h2>{{ getMessage }}</h2>
    <h2>{{ getCountAlias }}</h2>
    <h2>{{ getMessageAlias }}</h2>
  </div>
</template>
