import Vue from 'vue'
import Router from 'vue-router'
// 引入主页,直接引入
import Home from '@/pages/Home/Home'
// 引入分类页,按需动态加载
const Category = resolve => require(['@/pages/Category/Category.vue'],resolve)
//引入购物车页
const Cart = resolve => require(['@/pages/Cart/Cart'],resolve)
//引入我的页
const Mine = resolve => require(['@/pages/Mine/Mine'],resolve)
//引入登录注册页
const Login = resolve => require(['@/pages/Login/Login'],resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
