// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入更新rem的js
import '@/style/reset.js'
// 引入通用的css
import '@/style/reset.less'
// 导入http库
import axios from 'axios'
Vue.prototype.$http = axios
//导入mint-ui组件库
import {Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
