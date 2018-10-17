<template>
  <div>
    <div class="tips">vvue2.0-zoom：基于Vue的放大镜插件，常用于电商项目。 访问地址：
      <a href="https://github.com/jsonpeter/vue2.0-zoom" target="_blank" class="c1">vue2.0-zoom</a>
    </div>
    <img-zoom :src="smallImg" width="150" height="100" :bigsrc="smallImg" :configs="configs"></img-zoom>
  </div>
</template>

<script>
import imgZoom from 'vue2.0-zoom'
export default {
  components: { imgZoom },
  data () {
    return {
      smallImg: require('../assets/img/kobe.jpg'),
      configs: {
        width: 500,
        height: 300,
        maskWidth: 100,
        maskHeight: 100,
        maskColor: 'red',
        maskOpacity: 0.2
      }
    }
  }
}
</script>

<style scoped>
.tips{
  padding: 15px 0;
}
</style>
