// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import vueResource from 'vue-resource'
// 引入vuex  
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
Vue.use(vueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
