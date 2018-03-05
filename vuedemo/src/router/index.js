import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import IndexPage from '../pages/index'
Vue.use(Router)


export default new Router({
  mode:"history",
  routes: [
    
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },

  ]

})
