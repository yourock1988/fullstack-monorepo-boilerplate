import * as Vue from 'vue'
import App from './App.vue'

import './assets/css/style.css'

import store from './store'

const app = Vue.createApp(App)

app.use(store)

window.vm = app.mount('#app')
