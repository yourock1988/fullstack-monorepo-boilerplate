import { createStore } from 'vuex'

import example from './example'
import products from './products'

export default createStore({
  modules: {
    example,
    products,
  },
})
