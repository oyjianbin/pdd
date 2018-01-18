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
export default {
  name: 'App',
  components: {
    TabBar
  },
  computed: {
    TabShow () {
      // return this.$store.state.tabShow
    }
  }
}
</script>
<style>

</style>
