// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Collapse } from 'bootstrap-vue/es/components'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import InputTag from 'vue-input-tag'

Vue.config.productionTip = false

Vue.component('input-tag', InputTag)
Vue.use(Collapse)
Vue.use(BootstrapVue)


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})