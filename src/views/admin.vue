<template>
  <div class="wrapper">
    <mheader></mheader>
    <menuList></menuList>
    <div class="content-box">
      <tag></tag>
      <keep-alive :include="cachList">
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
  data () {
    return {
      cachList: ''
    }
  },
  computed: {
    ...mapGetters(['tagList'])
  },
  components: {
    mheader,
    menuList,
    tag
  },
  watch: {
    tagList (val) {
      var arr = []
      for (var i in val) {
        arr.push(val[i].name)
      }
      this.cachList = arr.join(',')
      console.log(this.cachList)
    }
  },
  created () {
    // console.log(this.tagList)
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
  overflow: auto;
}
</style>
