<template>
  <div>
    <div class="tips">element-china-area-data：Element UI Cascader级联选择器 中国省市区三级、二级联动option数据 。 访问地址：
      <a href="https://github.com/Plortinus/element-china-area-data" target="_blank" class="c1">element-china-area-data</a>
    </div>
    <div class="tips">v-distpicker：一个灵活的，高可用的 vue 省市区选择插件 。 访问地址：
      <a href="https://distpicker.pigjian.com/" target="_blank" class="c1">v-distpicker</a>
    </div>
    <div class="demo">
      <el-cascader size="large" :options="options1" v-model="selectedOptions1" @change="handleChange"></el-cascader>
      <el-cascader size="large" :options="options2" v-model="selectedOptions2" @change="handleChange"></el-cascader>
      <el-cascader size="large" :options="options3" v-model="selectedOptions3" @change="handleChange"></el-cascader>
      <el-cascader size="large" :options="options4" v-model="selectedOptions4" @change="handleChange"></el-cascader>
    </div>
    <div class="demo">
      <v-distpicker @selected="onSelected"></v-distpicker>
      <v-distpicker :province="select.province" :city="select.city" :area="select.area" @selected="onSelected"></v-distpicker>
    </div>
  </div>
</template>

<script>
import { provinceAndCityData, provinceAndCityDataPlus, regionData, regionDataPlus, CodeToText } from 'element-china-area-data'
import VDistpicker from 'v-distpicker'
export default {
  name: 'linkage',
  data () {
    return {
      CodeToText: '',
      options1: provinceAndCityData,
      options2: provinceAndCityDataPlus,
      options3: regionData,
      options4: regionDataPlus,
      selectedOptions1: [],
      selectedOptions2: [],
      selectedOptions3: [],
      selectedOptions4: [],
      select: { province: '广东省', city: '广州市', area: '海珠区' }
    }
  },
  components: { VDistpicker },
  methods: {
    handleChange (value) {
      console.log(value)
      console.log(CodeToText[value[0]])
      console.log(CodeToText[value[1]])
      console.log(CodeToText[value[2]])
    },
    onSelected (data) {
      console.log(data)
      console.log(data.province.value + ' | ' + data.city.value + ' | ' + data.area.value)
    }
  }
}
</script>

<style>
.tips,.demo {
  padding: 15px 0;
}
.el-cascader{
  margin-right: 20px;
}
.distpicker-address-wrapper{
  display: inline-block;
  margin-right: 60px;
}
</style>
