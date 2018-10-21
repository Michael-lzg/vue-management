<template>
  <div class="tableList">
    <div class="tip"><a href="https://github.com/nuysoft/Mock/wiki/Date" target="_blank" class="c1">mock.js</a>：表格数据使用mock.js随机模拟生成
    </div>
    <div class="table">
      <el-table :data="list" tooltip-effect="light" style="width: 100%;" :height="getTableHeight()">
        <el-table-column prop="number" type="index" label="序号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="title" label="文章标题" show-overflow-tooltip width="270">
          <template slot-scope="scope">
            <span>{{scope.row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发表时间" width="120">
          <template slot-scope="scope">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="作者" show-overflow-tooltip width="80">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="地址" show-overflow-tooltip width="180">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="zans" label="评级" width="150">
          <template slot-scope="scope">
            <el-rate v-model="scope.row.zans" disable dshow-scoretext-color="#ff9900" score-template="{value}"></el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="nums" label="点赞数" show-overflow-tooltip width="80">
          <template slot-scope="scope">
            <span>{{scope.row.nums}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="状态" width="100">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.isDraft">发表</el-tag>
            <el-tag type="info" v-if="!scope.row.isDraft">草稿</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span class="todoBtn">编辑</span>
            <span class="todoBtn">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <footer class="pagination">
      <el-pagination @current-change="currentPageChange" :current-page.sync="currentPage" :page-size="10" layout="total, prev, pager, next" :total="total">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'tableList',
  data () {
    return {
      list: [],
      total: 45,
      currentPage: 1
    }
  },
  methods: {
    getList () {
      this.axios.post('http://test123.com', {})
        .then((res) => {
          console.log(res)
          this.list = res.list
        })
    },
    getTableHeight () {
      return document.body.clientHeight - 200
    },
    currentPageChange (val) {
      console.log(val)
      this.getList()
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped lang='scss'>
.tableList{
  padding-top: 35px;
  padding-bottom: 40px;
  position: relative;
  background-color: #fff;
  padding-left: 10px;
  .tip{
    position: absolute;
    top: 5px;
  }
  .table{
    margin-top: 10px;
    background-color: pink;
  }
}
.pagination{
  // float:right;
  padding-top: 10px;
}
.todoBtn{
  cursor: pointer;
  color: #4990E2;
  margin-right: 10px;
}
</style>
