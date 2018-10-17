<template>
  <div class="clearfix">
    <div class="carousel-box fl">
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.src" alt="" width="400" height="300">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="carousel-box fl">
      <el-carousel :interval="3000" arrow="always" indicator-position='none'>
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.src" alt="" width="400" height="300">
          <div class="news">这是轮播消息</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        { id: 1, src: require('../assets/img/han1.jpg') },
        { id: 2, src: require('../assets/img/han2.jpg') },
        { id: 3, src: require('../assets/img/han3.jpg') },
        { id: 4, src: require('../assets/img/han4.jpg') },
        { id: 5, src: require('../assets/img/han5.jpg') }
      ]
    }
  }
}
</script>

<style>
.carousel-box {
  width: 400px;
  margin-right: 100px;
}
.news{
  position: absolute;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  color: black;
}
</style>
