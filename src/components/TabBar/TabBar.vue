<template>
  <div class="tabbar">
      <router-link to="/" class="home">
          <span></span>
          首页
      </router-link>
      <router-link to="/category" class="fl">
          <span></span>
          分类
      </router-link>
      <router-link to="/cart" class="shop">
          <span></span>
          购物车
      </router-link>
      <router-link to="/mine" class="mine">
          <span></span>
          我的
      </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    //   tabShow(){
    //     return this.$store.state.tabShow
    //   }
  }
}
</script>

<style lang="less" scoped>
.tabbar{
    width: 100%;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    display: flex;
    background-color: rgba(255, 255, 255, 0.842);
    a{
        flex: 1;
        height: 3.5rem;
        color: #777;
        padding-top: 0.65rem;
        text-align: center;
        span{
            display: block;
            width: 100%;
            height: 2rem;
            background-position: center 0;
            background-size: auto 2rem;
            margin-bottom: 0.1rem;
            background-repeat: no-repeat
        }
    }
}
// 背景图片
.home span{
    background-image: url('./images/shouye.png');
}
.fl span{
    background-image: url('./images/分类.png');
}
.shop span{
    background-image: url('./images/gouwuche.png');
}
.mine span{
    background-image: url('./images/我的.png');
}
//激活时更换背景图片
.home.router-link-exact-active>span{
    background-image: url('./images/shouye-active.png');
}
.fl.router-link-exact-active>span{
    background-image: url('./images/分类-active.png')
}
.shop.router-link-exact-active>span{
    background-image: url('./images/gouwuche-active.png')
}
.mine.router-link-exact-active>span{
    background-image: url('./images/我的-active.png')
}

.tabbar>a.router-link-exact-active>span{
    animation: navs 1s;
}
// 动画
@keyframes navs{
  0%{
    -webkit-background-size: auto .6rem;
    background-size: auto .6rem;
  }
  20%{
    -webkit-background-size: auto 2.2rem;
    background-size: auto 2.2rem;
  }
  40%{
    -webkit-background-size: auto 1.8rem;
    background-size: auto 1.8rem;
  }
  60%{
    -webkit-background-size: auto 2.06rem;
    background-size: auto 2.06rem;
  }
  80%{
    -webkit-background-size: auto 1.94rem;
    background-size: auto 1.94rem;
  }
  100%{
    -webkit-background-size: auto 2rem;
    background-size: auto 2rem;
  }
}
</style>
