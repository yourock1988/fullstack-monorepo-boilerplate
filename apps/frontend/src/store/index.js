import { createStore } from 'vuex'

import example from './example'
import students from './students'
import products from './products'

export default createStore({
  modules: {
    example,
    students,
    products,
  },
})
