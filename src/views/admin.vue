<template>
  <div class="wrapper">
    <mheader></mheader>
    <menuList></menuList>
    <div class="content-box">
      <tag></tag>
      <keep-alive :include="tagList">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import mheader from '../components/common/header'
import menuList from '../components/common/menu'
import tag from '../components/common/tag'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['tagList'])
  },
  components: {
    mheader,
    menuList,
    tag
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
  height: 100%;
  /* background-color: pink; */
  position: absolute;
  left: 250px;
  right: 10px;
  top: 70px;
  bottom: 0;
}
</style>
