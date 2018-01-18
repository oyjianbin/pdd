<template>
  <div class="header">
      <div class="img">
        <img src="./images/mpdd_logo.png" alt="">
      </div>
      <div class="p">
        <p>0.1元包邮清风面巾纸</p>
      </div>
      <div class="shop">前往购买</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
  width: 100%;
  height: 4.5rem;
  background-color: #ed2632;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
    .img >img{
      width: 9rem;
      height: 3rem;
    }
    .p >p{
      color: white;
    }
    .shop{
      width: 5.5rem;
      height: 2.5rem;
      color: #ed2632;
      background-color: white;
      border-radius: 3px;
      line-height: 2.5rem;
      text-align: center
    }
}
</style>



