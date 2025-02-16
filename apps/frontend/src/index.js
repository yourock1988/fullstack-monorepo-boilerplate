import * as Vue from 'vue'
// import store from '@/store'
// import router from '@/router'

import App from '@/App.vue'
// import '@/assets/css/style.css'

const app = Vue.createApp(App)

// app.use(store)
// app.use(router)

window.vm = app.mount('#app')
