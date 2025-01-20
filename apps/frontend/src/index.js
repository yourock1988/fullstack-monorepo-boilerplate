import './js/foo.js'
// import './js/main.js'
import './assets/css/style.css'

import car from './assets/img/rolls-royce.jpg'

console.log(car)

import * as Vue from 'vue'

const app = Vue.createApp({ template: '<foo-bar></foo-bar>' })

app.component('foo-bar', require('./components/foo-bar.vue').default)

app.mount('#app')
