<template>
  <div class="loginPage">
    <div class="box">
      <div class="top">系统登录</div>
      <div class="name item">
        <i class="el-icon-edit"></i>
        <input type="text" v-model="name">
      </div>
      <div class="password item">
        <i class="el-icon-view"></i>
        <input type="password" v-model="password">
      </div>
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
      name: '',
      password: '',
      tsName: '',
      tsPassword: ''
    }
  },
  methods: {
    toLogin () {
      var a1 = this.util.isUser(this.name)
      var a2 = this.util.isPassword(this.password)
      if (a1 !== 1) {
        alert(a1)
        return
      }
      if (a2 !== 1) {
        alert(a2)
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
  .top{
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
  .item{
    height: 32px;
    background-color: #ddd;
    padding-left: 45px;
    position: relative;
    margin-bottom: 30px;
    border-radius: 4px;
    >i{
     width: 45px;
     height: 32px;
     line-height: 32px;
     position: absolute;
     text-align: center;
     left: 0;
     background-color: #f6f6f6;
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
</style>
