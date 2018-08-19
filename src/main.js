// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import { Collapse } from 'bootstrap-vue/es/components';

Vue.use(Collapse);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})