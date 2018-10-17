<template>
  <div class="mainPage">
    <div class="item">
      <swiper></swiper>
    </div>
    <div class="item">
      <accordion></accordion>
    </div>
  </div>
</template>

<script>
import accordion from '../../components/accordion'
import swiper from '../../components/swiper'
export default {
  // name: 'swiper',
  components: { accordion, swiper }
}
</script>

<style scoped>
.mainPage{
  overflow: auto;
}
  .item{
    margin-bottom: 20px;
  }
</style>
