<template>
    <div class="login">
        <div class="title">
            <span>账号登录</span> 
            <span>|</span>
            <span>验证码登录</span>
        </div>
        <div class="false">

        </div>
        <div class="from">
            <input type="tel" placeholder="手机号码" v-model="phone">
            <input type="password" placeholder="密码" v-model="pwd">
        </div>
        <div class="rember">
            <div class="left">
                <input type="checkbox" id="rad">
                <label for="rad">记住登录状态</label>
            </div>
            <div class="right">忘记密码？</div>
        </div>
        <div class="dl" @click="login()">登录</div>
    </div>
</template>
<script>
export default {
data () {
    return {
        phone: '',
        pwd: ''
    }
},
methods: {
    login () {
        let phone = this.phone
        let pwd = this.pwd
        let res = /^1[3458]\d{9}$/g
        if (res.test(phone) && pwd != '') {
            //验证通过
            let userObj = {
                phone: phone,
                pwd: pwd
            }
            this.$Msg('提示','登录成功')
            this.$router.push('/')
            this.clear()
        }else{
            this.$Msg('提示','手机号错误')
        }
    },
    // 清空
    clear () {
        this.pwd = '',
        this.phone = ''
    }
},
computed: {
    userInfo () {
        
    },
    users () {

    }
},
created () {
   
    }
}
</script>

<style scoped lang="less">
@bc: #ed435b;
.login{
    width: 90%;
    height: 500px;
    /* background-color: pink; */
    margin: 0px auto;
    margin-top: 80px;
}
.title{
    width: 70%;
    height: 10%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #ccc;
    margin-bottom: 50px;
}
.title :first-child{
    color: @bc
}
.from{
    width: 100%;
    height: 30%;
}
input[type='password']{
    width: 100%;
    height: 40px;
    margin: 15px 0;
    padding-left: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
}
input[type='tel']{
    width: 100%;
    height: 40px;
    margin: 15px 0;
    padding-left: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
}
.rember{
    width: 100%;
    height: 5%;
    margin-bottom: 15%;
}
.rember .left{
    width: 50%;
    float: left;
    color: #ccc;
}
.rember .right{
    width: 50%;
    float: right;
    color: @bc;
    text-align: right;
}
.dl{
    width: 100%;
    height: 40px;
    background-color: @bc;
    margin-top: 20px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: white
}
.zc{
    width: 100%;
    height: 40px;
    background-color: white;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #ccc
}
</style>
