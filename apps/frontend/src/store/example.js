export default {
  namespaced: true,

  state() {
    return {
      count: 0,
      message: 'foo',
    }
  },

  getters: {
    getCount(state) {
      return state.count
    },

    getMessage(state) {
      return state.message
    },
  },

  mutations: {
    increment(state) {
      state.message += '!'
      state.count += 1
    },

    incrementBy(state, n) {
      state.count += n
      state.message += n
    },

    setCount(state, count) {
      state.count = count
    },
  },

  actions: {
    timeout({ commit }) {
      setTimeout(() => commit('increment'), 1000)
    },

    async getData({ dispatch }, data) {
      const url = 'https://web-app.click/university/api/v1/students'
      const resp = await fetch(url)
      const json = await resp.json()
      await dispatch('react', { json, data })
    },

    async react({ commit }, payload) {
      commit('setCount', payload.json.code + payload.data)
    },
  },
}
