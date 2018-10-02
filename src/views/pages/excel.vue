<template>
  <div>
    <div class="tips">导出excel需要安装两个依赖包file-saver xlsx， script-loader
      <el-button type="primary" class="fr" @click="downExcel">导出Excel</el-button>
    </div>
    <div class="tableList">
      <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="序号" width="55">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="标题" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>
        <el-table-column label="作者">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="时间">
          <template slot-scope="scope">{{ scope.row.time }}</template>
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
    handleSelectionChange (val) {
      console.log(val)
    },
    downExcel () {
      import('../../vendor/Export2Excel.js').then(excel => {
        const tHeader = ['序号', '标题', '作者', '时间']
        const filterVal = ['id', 'title', 'name', 'time']
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
    for (var i = 0; i < 10; i++) {
      this.list.push({
        id: i + 1,
        title: '这是一个标题哈哈哈哈或或或或或或或或或或',
        name: '张三',
        time: '2018-09-30'
      })
    }
  }
}
</script>

<style scoped>
.tips {
  padding: 15px 0;
  /* background-color: #ddd; */
  margin: 10px 0;
  text-indent: 15px;
}
.el-button{
  margin-top: -10px;
}
</style>
