import * as Vue from 'vue'
import App from './App.vue'

import './assets/css/style.css'

import store from './store'
import router from './router'

const app = Vue.createApp(App)

app.use(store)
app.use(router)

window.vm = app.mount('#app')
