<template>
  <div class="wrapper">
    <mheader></mheader>
    <menuList></menuList>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mheader from '../components/common/header'
import menuList from '../components/common/menu'
export default {
  components: {
    mheader,
    menuList
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 70px;
}
.content-box {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
}
</style>
