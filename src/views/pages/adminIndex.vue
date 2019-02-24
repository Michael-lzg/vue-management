<template>
  <div class="mainpage clearfix">
    <div class="left-block fl">
      <div class="left-top-block"></div>
      <div class="left-bot-block"></div>
    </div>
    <div class="right-block fr">
    </div>
  </div>
</template>

<script>
export default {
  name: 'adminIndex'
}
</script>

<style scoped>
.mainpage {
  height: calc(100% - 120px);
}
.left-block {
  width: 30%;
  height: 100%;
}
.left-top-block {
  height: 40%;
  background-color: white;
}
.left-bot-block {
  margin-top: 15px;
  height: 58%;
  background-color: white;
}
.right-block {
  width: 68%;
  height: 100%;
  background-color: white;
}
</style>
