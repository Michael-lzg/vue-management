<template>
  <div class="mainpage clearfix">
    <div class="left-block fl">
      <div class="left-top-block">
        <div class="img">
          <img src="../../assets/img/admin.jpg" alt="" width="120">
        </div>
        <div class="info">
          <div class="name">michael</div>
          <div class="job c8">web前端开发</div>
          <div class="tag">
            <el-tag>Vue</el-tag>
            <el-tag>webpack</el-tag>
            <el-tag>javascript</el-tag>
          </div>
        </div>
      </div>
      <div class="left-bot-block">
        <el-card style="height:350px;">
          <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>
          Vue
          <el-progress :percentage="95" color="#42b983"></el-progress>
          JavaScript
          <el-progress :percentage="90" color="#f1e05a"></el-progress>
          CSS
          <el-progress :percentage="90"></el-progress>
          HTML
          <el-progress :percentage="85" color="#f56c6c"></el-progress>
          微信小程序
          <el-progress :percentage="75" color="#FAAD14"></el-progress>
          react
          <el-progress :percentage="60" color="##7E5BCF"></el-progress>
        </el-card>
      </div>
    </div>
    <div class="right-block fr">
      <el-card>
        <div slot="header" class="clearfix">
          <span>优秀开源项目</span>
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/repo/zdy1988/vue-jstree" target="_blank" class="c1">vue-jstree</a>：Vue2.0+ 的树形结构插件
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/repo/scalia/vuejs-tree" target="_blank" class="c1">vuejs-tree</a>：高度可配置的急速的 Vue 树形视图
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/repo/MingSeng-W/vue-bloom-menu" target="_blank" class="c1">vue-bloom-menu</a>：基于 Vue 的弧形菜单弹出组件
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/repo/jaweii/vueg" target="_blank" class="c1">vueg</a>：为 webApp 提供转场特效的开源 Vue 插件
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/repo/alvarotrigo/vue-fullpage-js" target="_blank" class="c1">vue-fullpage.js</a>：针对 Vue.js 的官方 fullPage.js 包装库
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/repo/waynecz/vue-img-inputer" target="_blank" class="c1">vue-img-inputer</a>：基于 Vue2 的图片输入框，用于图片预览、拖拽、回填，主题可选，高度可定制
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/repo/xLogic92/vue-picture-preview" target="_blank" class="c1">vue-picture-preview</a>：移动端 Vue.js 图片预览插件
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'adminIndex'
}
</script>

<style scoped lang="scss">
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
  padding: 20px;
  padding-left: 120px;
  position: relative;
  .img {
    position: absolute;
    left: 20px;
    img {
      border-radius: 120px;
    }
  }
  .info {
    margin-left: 20px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    .job {
      font-size: 16px;
    }
  }
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
