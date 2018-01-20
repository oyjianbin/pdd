// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
//导入Vuex
import store from './store'
// 引入更新rem的js
import '@/style/reset.js'
// 引入通用的css
import '@/style/reset.less'
// 导入http库
import axios from 'axios'
Vue.prototype.$http = axios
//导入mint-ui组件库
import { Swipe, SwipeItem, MessageBox} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$Msg = MessageBox
Vue.config.productionTip = false

// 路由拦截器(导航守卫),控制tabBar的显示隐藏
// router.beforeEach((to,from,next) =>{
//   console.log(to)
//   console.log(from)
//   console.log(next)
// })


/* eslint-disable no-new */
console.log(store)
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
