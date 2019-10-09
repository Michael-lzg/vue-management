<template>
  <div class="mainpage clearfix">
    <div class="left-block fl">
      <div class="left-top-block">
        <div class="img">
          <img src="../../assets/img/admin.jpg" alt="" width="120">
        </div>
        <div class="info">
          <div class="name">admin</div>
          <div class="job c8">web前端开发</div>
          <div class="tag">
            <el-tag>Vue</el-tag>
            <el-tag>webpack</el-tag>
            <el-tag>javascript</el-tag>
          </div>
        </div>
      </div>
      <div class="left-mid-block">
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
      <div class="left-bot-block">
        <el-card style="height:350px;">
          <div slot="header" class="clearfix">
            <span>友情链接</span>
          </div>
          <div class="list clearfix">
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">vue官方文档
            </div>
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">webapck官网
            </div>
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">react中文网
            </div>
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">element-ui
            </div>
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">掘金论坛
            </div>
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">vue官方文档
            </div>
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">掘金论坛
            </div>
            <div class="item fl">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" alt="" width="20">vue官方文档
            </div>
          </div>

        </el-card>
      </div>
    </div>
    <div class="right-block fr">
      <el-card>
        <!-- <div slot="header" class="clearfix">
          <span>优秀开源项目</span>
        </div>
        <div class="tip">
          <a href="http://es6.ruanyifeng.com/#README" target="_blank">ECMAScript 6 入门, 全面介绍 ECMAScript 6 新引入的语法特性。</a>
        </div>
        <div class="tip">
          <a href="https://juejin.im/post/5bfe003f5188252bf829c3fb" target="_blank">细解JavaScript ES7 ES8 ES9 新特性</a>
        </div>
        <div class="tip">
          <a href="https://juejin.im/post/5bd16676f265da0ae677820d" target="_blank">前端优化常用技术心得,从建立http连接开始，到页面展示到浏览器里，经历了加载、执行、渲染，重构的几个阶段</a>
        </div>
        <div class="tip">
          <a href="https://juejin.im/post/5b9f176b6fb9a05d3827d03f" target="_blank">this（他喵的）到底是什么 — 理解 JavaScript 中的 this、call、apply 和 bind</a>
        </div>
        <div class="tip">
          <a href="https://github.com/chen-yulun/vue2-elm" target="_blank">基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用</a>
        </div>
        <div class="tip">
          <a href="https://juejin.im/post/5bd66efcf265da0a8a6af2d2" target="_blank">webpack4.x最详细入门讲解</a>
        </div>
        <div class="tip">
          <a href="https://www.webpackjs.com/concepts/" target="_blank">webpack中文网</a>
        </div>
        <div class="tip">
          <a href="https://react.docschina.org/" target="_blank">React中文网</a>
        </div>
        <div class="tip">
          <a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank">微信小程序开发</a>
        </div>
        <div class="tip">
          <a href="https://antv.alipay.com/zh-cn/f2/3.x/" target="_blank">F2 移动端可视化方案</a>
        </div>
        <div class="tip">
          <a href="https://echarts.baidu.com/index.html" target="_blank">ECharts官网</a>
        </div>
        <div class="tip">
          <a href="https://youzan.github.io/vant-weapp/#/intro" target="_blank">Vant移动端UI组件库</a>
        </div>
        <div class="tip">
          <a href="https://github.com/iview/iview-admin" target="_blank">iview-admin管理后台</a>
        </div>
        <div class="tip">
          <a href="https://www.awesomes.cn/subject/vue" target="_blank">Vue专题开源项目</a>
        </div>
        <div class="tip">
          <a href="https://caniuse.com/#feat=picture-in-picture" target="_blank">查看前端兼容性</a>
        </div>
        <div class="tip">
          <a href="https://juejin.im/post/5ba7d5dd5188255c6140cc9d" target="_blank">前端常用插件、工具类库汇总</a>
        </div> -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="文章" name="first">
            <artical></artical>
          </el-tab-pane>
          <el-tab-pane label="项目" name="second">
            <github></github>
          </el-tab-pane>
          <!-- <el-tab-pane label="应用" name="third">角色管理</el-tab-pane> -->
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import artical from '../../components/artical'
import github from '../../components/github'
export default {
  name: 'adminIndex',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: { artical, github },
  methods: {
    handleClick () { }
  }
}
</script>

<style scoped lang="scss">
.mainpage {
  // height: calc(100% - 120px);
  overflow: auto;
}
.left-block {
  width: 30%;
  // background-color: #fff;
  // height: 100%;
  // overflow: auto;
}
.left-top-block {
  height: 200px;
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
.left-mid-block {
  margin: 10px 0;
}
.left-bot-block {
  margin: 15px 0;
  .el-card {
    height: auto !important;
  }
  .item {
    width: 50%;
    padding-bottom: 12px;
    > img {
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
.right-block {
  width: 68%;
  // height: 100%;
  background-color: white;
  .el-card {
    height: 100%;
    overflow: auto;
  }
}
</style>
