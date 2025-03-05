import { createStore } from 'vuex'

import products from './products'
import watchedProducts from './watchedProducts'

export default createStore({
  modules: {
    products,
    watchedProducts,
  },
})
