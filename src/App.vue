<template>
  <div id="app">
    <!-- 缓存组件,各个页面缓存 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <TabBar></TabBar>
  </div>
</template>

<script>
// 引入tabbar组件
import TabBar from '@/components/TabBar/TabBar'
//引入api
import api from '@/api'
export default {
  name: 'App',
  components: {
    TabBar
  },
  // 在app里面获取数据并添加到vuex中
  created () {
    console.log(this.$store)
    this.$store.dispatch('save_categories')
    this.$store.dispatch('save_goods_list')
    this.computedCategories()
  },
  methods: {
    // 返回分类中对应的数据
    computedCategories () {
      let categories = this.categories
      let goods_list = this.goods_list
      for (let i =0; i< categories.length; i++) {
        for (let j =0; j< goods_list.length; j++) {
          //判断分类的id是否等于产品里面的id
          if (categories[i].id === goods_list[j].categoryId) {
            //添加到分类里面的空数组中
            categories[i].products.push(goods_list[j])
          }
        }
      }
      //存到vuex中
      this.$store.commit('SAVE_COMPUTED_CATEGORIES',categories)
    }
  }
}
</script>
<style>

</style>
