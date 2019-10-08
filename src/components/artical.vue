<template>
  <div class="list">
    <div class="listItem" v-for="(item,index) in list" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="tag">
        <el-tag v-for="(v,k) in item.tag" :key="k">{{v}}</el-tag>
      </div>
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import { articalList } from '../data/artical.js'
export default {
  data () {
    return {
      list: articalList
    }
  }

}
</script>

<style lang="scss" scoped>
.list {
  height: 100%;
  overflow: auto;
}
.listItem {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  color: #333;
}
.title {
  padding: 10px 0;
  font-weight: bold;
}
.content {
  margin-top: 10px;
}
.el-tag {
  margin-right: 10px;
}
</style>
