<template>
  <div class="catedory">
    <headers></headers>
    <div class="main">
      <div class="heads">
        <router-link to="/" tag="span" class="index">首页</router-link>
        <router-link to="/cart" tag="span" class="store">商家入驻</router-link>
        <router-link to="/mine" tag="span" class="help">帮助中心</router-link>
      </div>
      <div class="product-list">
        <ul>
          <li>品牌清仓</li>
          <li>品牌清仓</li>
          <li>品牌清仓</li>
          <li>品牌清仓</li>
        </ul>
        <div class="list-bottom">
          <span></span>
        </div>
      </div>
      <div class="pdd-subject">
        <div class="pdd-subject-banner">
          <img src="//mcdn.pinduoduo.com/assets/img/act_brand.jpg" alt="">
        </div>
        <div class="pdd-subject-text">
          <p>品牌清仓</p>
          <p>打算极大极大撒点即为情节轻微就是大奖赛的价位 使劲地撒娇地集散地三大萨达斯三大萨达斯色达色达色达是是大三大四</p>
        </div>
      </div>
      <div class="pdd-products">
        <ul>
          <li>
            <div class="pdd-baner">
              <img src="http://omsproductionimg.yangkeduo.com/images/2018-01-10/aab5a6d9edf5734c028ff02400c9fac3.jpeg@750w_1l_50Q.src" alt="">
            </div>
            <div class="pdd-dec">
              <p>是大三大四的阿斯打算大撒旦阿斯打算大撒旦啊是哒是哒是哒是打算大三大四啊是哒是哒是哒啊实打实的</p>
              <span>￥23</span>
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

export default {
  components: {
    Headers
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

.product-list{
  width: 100%;
  height: 3rem;
  background-color: #ed435b;
  display: flex;
  justify-content: space-between;
  >ul{
    height: 100%;
    width: 90%;
    // display: flex;
    // justify-content: space-between;
    li{
      text-align: center;
      line-height: 3rem;
      width: 22%;
      height: 100%;
      color: white;
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

