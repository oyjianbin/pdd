<template>
  <div class="home">
    <headers></headers>  
    <div class="main">
      <div class="head">
        <router-link to="/" tag="span" class="index">首页</router-link>
        <router-link to="/cart" tag="span" class="store">商家入驻</router-link>
        <router-link to="/mine" tag="span" class="help">帮助中心</router-link>
      </div>
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in banner" :key="item.id">
            <img :src="item.banner_img">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="activity">
        <div class="activity_top">
          <span>精彩活动</span>
          <a>查看更多></a>
        </div>
        <div class="activity_left">
          <img src="//mcdn.pinduoduo.com/assets/img/mpdd_global.png" alt="">
          <img src="//mcdn.pinduoduo.com/assets/img/mpdd_you.png" alt="">
        </div>
        <div class="activity_right">
          <img src="//mcdn.pinduoduo.com/assets/img/mpdd_brand_sale.jpg" alt="">
          <img src="//mcdn.pinduoduo.com/assets/img/mpdd_sale.png" alt="">
          <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit.jpg" alt="">
        </div>
      </div>
      <div class="pdd-cat">
        <div class="pdd-cat-top">
          <span>精选专题</span>
          <a>查看更多></a>
        </div>
        <ul>
          <li v-for="(item,index) in goods_list" :key="item.goods_id">
            <div class="cat-item">
              <div class="cat-banner">
                <img src="//mcdn.pinduoduo.com/assets/img/cat_clothes.jpg" alt="">
              </div>
              <dl>
                <li class="cat-list"  v-for="(item,index) in goods_list" :key="item.goods_id" v-if="index <3">
                  <img :src="item.thumb_url">
                  <p>{{item.goods_name}}</p>
                  <span>￥{{item.group.price.toFixed(2)}}</span>
                </li>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
// 引入头部组件
import headers from "@/components/Header/Header"
//引入api
import api from '@/api'

export default {
  components: {
    headers
  },
  data(){
    return {
      banner: [],
      goods_list: []
    }
  },
  created() {
    this.$http.get(api.host + '/banner')
      .then(res=> {
          console.log(res.data)
          this.banner = res.data
      })
    this.$http.get(api.host + '/goods_list')
      .then(res =>{
        console.log(res.data)
        this.goods_list = res.data
      })
  }
}
</script>

<style lang="less" scoped>
@font-color: rgba(0, 0, 0, 0.5);
.head{
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  span{
    margin: 0 0.5rem;
    color: @font-color
  }
}
.head>span.router-link-exact-active{
  color: red
}
// .store.router-link-exact-active{
//   color: red
// }
// .help.router-link-exact-active{
//   color: red
// }
.banner{
  height: 12rem;
    img{
      width: 100% !important;
      height: 155px;
    }
  }
.activity{
  width: 100%;
  .activity_top{
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 0 0.5rem;
    color: @font-color
  }
  .activity_left{
    width: 50%;
    float: left;
    margin-right: 2px;
    img{
      width: 100%;
      padding-bottom: 3px;
    }
  }
  .activity_right{
    width: 49%;
    float: left;
    img{
      width: 100%;
      padding-bottom: 3px;
    }
  }
}  

.pdd-cat{
  width: 100%;
  // margin-bottom: 2rem;
  .pdd-cat-top{ 
    height: 4rem;
    padding-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    color: @font-color;
    clear: both;
  }
}
.pdd-cat>ul{
  width: 100%;
  
  li{
    margin-bottom: 1rem;
  }
  >li>.cat-item{
    width: 100%;
    .cat-banner{
      width: 100%;
      img{
        width: 100%;
        margin-bottom: 0.5rem;
      }
    }
    dl{
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: white;
      li{
        width: 32%;
        text-align: center;
        padding: 0 3px;
        padding-bottom: 0.5rem;
        img{
          width: 100%;
        }
        p{
          height: 3rem;
          line-height: 1.5rem;
          margin: 6px 0;
          color: rgba(0, 0, 0, 0.75);
          overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap
        }
        span{
          color: red
        }
      }
    }
  }
}

</style>


