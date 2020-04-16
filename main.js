import Vue from 'vue'
import App from './App'
import BaseTabbar from './components/BaseTabbar.vue'
import suspension from './components/suspension/suspension.vue'
import BasePopup from './components/BasePopup/BasePopup.vue'
import {
    http
} from './js_sdk/luch-request/index'
Vue.component('BaseTabbar', BaseTabbar);
Vue.component('suspension', suspension);
Vue.component('BasePopup', BasePopup);
Vue.prototype.$http = http
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()