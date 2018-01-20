<template>
  <div class="catedory">
    <headers></headers>
    <div class="main">
      <div class="heads">
        <router-link to="/" tag="span" class="index">首页</router-link>
        <router-link to="/cart" tag="span" class="store">商家入驻</router-link>
        <router-link to="/mine" tag="span" class="help">帮助中心</router-link>
      </div>
      <!-- 蒙版 -->
      <div class="nav-list-mask" v-if="!navListBol"></div>
      <div class="nav-list" v-if="!navListBol">
        <div class="nav-all">
          全部分类
          <div @click="changeBolA()">
            <span></span>
          </div>  
        </div>
        <ul>
          <li v-for="(item,index) in categories" @click="products()" :key="item.id">{{item.name}}</li> 
        </ul>
      </div>
      <!-- 切换的list -->
      <div class="product-list" v-if="navListBol">
        <ul>
          <li v-for="(item,index) in categories" :key="item.id">{{item.name}}</li>
        </ul>
        <div class="list-bottom" @click="changeBol()">
          <span></span>
        </div>
      </div>
      <div class="pdd-subject" v-for="(item,index) in categories" :key="item.id" v-if="index<1">
        <div class="pdd-subject-banner">
          <img :src="item.category_img" alt="">
        </div>
        <div class="pdd-subject-text">
          <p>{{item.name}}</p>
          <p>{{item.dec}}</p>
        </div>
      </div>
      <div class="pdd-products">
        <ul>
          <li v-for="(item,index) in newProducts" :key="item.id">
            <div class="pdd-baner">
              <img :src="item.hd_thumb_url">
            </div>
            <div class="pdd-dec">
              <p>{{item.goods_name}}</p>
              <span>￥{{item.group.price}}</span>
            </div>
          </li>
           <li>
            <div class="pdd-baner">
              <img src="http://omsproductionimg.yangkeduo.com/images/2018-01-10/aab5a6d9edf5734c028ff02400c9fac3.jpeg@750w_1l_50Q.src" alt="">
            </div>
            <div class="pdd-dec">
              <p>是大三大四的阿斯打算大撒旦阿斯打算大撒旦啊是哒是哒是哒是打算大三大四啊是哒是哒是哒啊实打实的</p>
              <span>￥23</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 倒入头部
import Headers from '@/components/Header/Header'
//导入api
import api from '@/api'
export default {
  components: {
    Headers
  },
  data () {
    return {
      navListBol: true,
      newProducts: [],
      activeCategories: 0
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    
  },
  created () {

  },
  methods: {
    changeBolA () {
      this.navListBol = true
    },
    changeBol () {
      this.navListBol = false
    },
    products () {
      this.$http.get(api.host+'/categories/4?_embed=goods_list')
        .then(res=>{
          console.log(res.data.goods_list)
          this.newProducts = res.data.goods_list
        })
    }
  }
}
</script>

<style lang="less" scoped>
@font-color: rgba(0, 0, 0, 0.5);
.heads{
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
// 蒙版
.nav-list-mask{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 13rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 5;
}
.nav-list{
  width: 100%;
  .nav-all{
    width: 100%;
    height: 3rem;
    background-color: #ed435b;
    color: white;
    padding-left: 15px;
    line-height: 3rem;
    position: relative;
    >div{
      width: 10%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      >span{     
      display: block;
      width: 13px;
      height: 8px;
      background: url("./images/mpdd_cat_arrow.png") center center no-repeat;
      background-size: 100% 100%;
      margin: 1rem auto;
      }
    }
  }
  ul{
    width: 100%;
    background-color: white;
    z-index: 10;
    >li{
      text-align: center;
      line-height: 3rem;
      width: 25%;
      height: 100%;
      color: @font-color;
      float: left;
      border-right: 1px solid rgba(204, 204, 204, 0.3);
      border-bottom: 1px solid rgba(204, 204, 204, 0.3)
      // &:after{

      // }
    }
  }
}
.product-list{
  width: 100%;
  height: 3rem;
  background-color: #ed435b;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  >ul{
    height: 100%;
    width: 90%;
    display: inline-block;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    li{
      display: inline-block;
      text-align: center;
      line-height: 3rem;
      width: 22%;
      height: 100%;
      color: white;
      float: left;
    }
  }
  .list-bottom{
    width: 10%;
    span{
      display: block;
      width: 13px;
      height: 8px;
      background: url("./images/mpdd_cat_arrow.png") center center no-repeat;
      background-size: 100% 100%;
      margin: 1rem auto;
      transition: 0.5s linear;
      transform: rotate(0deg)
    }
  }
}

.product-list div.active>span{
  transform: rotate(-180deg)
}

.pdd-subject{
  width: 100%;
  .pdd-subject-banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .pdd-subject-text{
    width: 100%;
    background-color: white;
    color: #686868;
    padding: 0 15px;
    p{
      overflow-x: hidden;
      
    }
    :nth-child(1){
      height: 4rem;
      line-height: 4rem;
      font-size: 1.5rem;
      position: relative;
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        border-bottom: 1px solid #ccc
      }
    }
    :last-of-type{
      line-height: 1.7rem;
      padding-top: 5px;
      padding-bottom: 10px;
    }
  }
}

// 产品列表
.pdd-products{
  width: 100%;
  >ul{
    width: 100%;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    >li{
      width: 50%;
      background-color: white;
      padding: 1rem 1rem;
      text-align: center;
      }
      img{
        width: 100%;
      }
      p{
        line-height: 1.5rem;
        margin: 5px 0;
        color: #686868; 
        height: 4.5rem;
        overflow: hidden;
      }
      span{
        color: red;
      }
      :nth-child(odd){
        margin-right: 0.8rem;
      }   
    }
}

</style>

