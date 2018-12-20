// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = axios;
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element,{size: 'small'});
import '@/css/base.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})