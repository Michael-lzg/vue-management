<template>
  <div class="loginPage">
    <div class="box">
      <div class="top">系统登录</div>
      <div class="name item">
        <i class="iconfont icon-user"></i>
        <input type="text" v-model="name">
      </div>
      <div class="item colRed">{{tsName}}</div>
      <div class="password item">
        <i class="iconfont icon-icon_yulan"></i>
        <input type="password" v-model="password">
      </div>
      <div class="item colRed">{{tsPassword}}</div>
      <div class="btn">
        <el-button type="primary" @click="toLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'admin',
      password: 'aaa123',
      tsName: '',
      tsPassword: ''
    }
  },
  methods: {
    toLogin () {
      var a1 = this.util.isUser(this.name)
      var a2 = this.util.isPassword(this.password)
      if (a1 !== 1) {
        this.tsName = a1
        return
      }
      if (a2 !== 1) {
        this.tsPassword = a2
        return
      }
      this.$router.push({
        path: '/admin'
      })
      sessionStorage.setItem('isLogin', true)
    }
  }
}
</script>

<style scoped lang="scss">
.loginPage{
  width: 100%;
  height: 100%;
  background-color: rgb(45, 58, 75);
  padding-top: 150px;
}
.box{
  width: 350px;
  padding: 30px;
  background-color: #ddd;
  margin: 0 auto;
  border-radius: 4px;
  .top{
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
  .item{
    height: 32px;
    line-height: 32px;
    background-color: #ddd;
    padding-left: 45px;
    position: relative;
    // margin-bottom: 30px;
    border-radius: 4px;
    >i{
     width: 45px;
     height: 32px;
     line-height: 32px;
     position: absolute;
     text-align: center;
     left: 0;
     background-color: #f6f6f6;
     font-size: 22px;
    }
    >input{
      height: 32px;
      background-color: #fff;
      width: 100%;
      text-indent: 1em;
    }
  }
}
.el-button--primary{
  width: 100%;
  height: 100%;
}
.colRed{
  color: red;
}
</style>
