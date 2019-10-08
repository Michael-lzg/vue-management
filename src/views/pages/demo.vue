<template>
  <div>
    <div class="tip" v-for="(item,index) in list" :key="index"><a :href="item.url" target="_blank" class="c1">{{item.name}}</a>：{{item.content}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {name: 'vue-jstree', url: 'https://www.awesomes.cn/repo/zdy1988/vue-jstree', content: 'Vue2.0+ 的树形结构插件'},
        {name: 'vuejs-tree', url: 'https://www.awesomes.cn/repo/scalia/vuejs-tree', content: '高度可配置的急速的 Vue 树形视图'},
        {name: 'vue-bloom-menu', url: 'https://www.awesomes.cn/repo/MingSeng-W/vue-bloom-menu', content: '基于 Vue 的弧形菜单弹出组件件'},
        {name: 'vueg', url: 'https://www.awesomes.cn/repo/jaweii/vueg', content: '为 webApp 提供转场特效的开源 Vue 插件'},
        {name: 'fullpage.js', url: 'https://www.awesomes.cn/repo/alvarotrigo/vue-fullpage-js', content: 'jQuery全屏滚动插件fullPage.js演示'},
        {name: 'vue-img-inputer', url: 'https://www.awesomes.cn/repo/waynecz/vue-img-inputer', content: '基于 Vue2 的图片输入框，用于图片预览、拖拽、回填，主题可选，高度可定制'},
        {name: 'vue-picture-preview', url: 'https://www.awesomes.cn/repo/xLogic92/vue-picture-preview', content: '移动端 Vue.js 图片预览插件'},
        {name: 'Animate.css', url: 'https://juejin.im/post/5ba7d5dd5188255c6140cc9d', content: 'CSS3 动画库，也是目前最通用的动画库。'},
        {name: 'clipboard.js', url: 'http://www.clipboardjs.cn/', content: '现代化的拷贝文字。'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
