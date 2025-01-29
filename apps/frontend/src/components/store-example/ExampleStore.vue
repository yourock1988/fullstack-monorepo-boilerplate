<script>
import StoreGetters from './StoreGetters.vue'
import StoreState from './StoreState.vue'
import StoreMutations from './StoreMutations.vue'
import StoreActions from './StoreActions.vue'

export default {
  components: { StoreState, StoreGetters, StoreMutations, StoreActions },
}
</script>

<template>
  <div>
    <store-state></store-state>
    <store-mutations></store-mutations>
    <store-getters></store-getters>
    <store-actions></store-actions>
  </div>
</template>
