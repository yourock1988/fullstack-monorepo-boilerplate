import { createStore } from 'vuex'

import product from './product'
import products from './products'
import watchedProducts from './watchedProducts'

export default createStore({
  modules: {
    product,
    products,
    watchedProducts,
  },
})
