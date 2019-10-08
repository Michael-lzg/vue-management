<template>
  <div class="mainPage">
    <div class="tips">导出excel需要安装两个依赖包file-saver xlsx， script-loader
      <el-button type="primary" size='mini' class="" @click="downExcel">导出Excel</el-button>
    </div>
    <div class="tableList">
      <el-table :data="list" tooltip-effect="light" style="width: 100%;">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  name: 'excel',
  methods: {
    getList () {
      this.axios.post('http://test123.com', {})
        .then((res) => {
          console.log(res)
          this.list = res.list
        })
    },
    handleSelectionChange (val) {
      console.log(val)
    },
    downExcel () {
      import('../../vendor/Export2Excel.js').then(excel => {
        const tHeader = ['序号', '标题', '作者', '时间', '地址', '评级', '点赞数', '状态']
        const filterVal = ['index', 'title', 'name', 'date', 'address', 'zans', 'nums', 'isDraft']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth
        })
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return this.util.dateFormat(v[j])
        } else {
          return v[j]
        }
      }))
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>
.tips {
  padding: 10px 0;
}
.el-button{
  margin-top: -10px;
}
</style>
<style>
.el-table th, .el-table td{
  padding: 10px 0 !important;
}
</style>
