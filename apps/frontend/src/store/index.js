import { createStore } from 'vuex'

import example from './example'
import students from './students'

export default createStore({
  modules: {
    example,
    students,
  },
})
