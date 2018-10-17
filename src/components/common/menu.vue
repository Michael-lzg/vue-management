<template>
  <div class="menu">
    <el-menu :router=true :default-active="onRoutes" :default-openeds="openList" class="el-menu-vertical-demo" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" :collapse="collapse" unique-opened>
      <template v-for="item in list">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index" @click="showSusb(item)">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item :index="item.index" v-for="(item, i) in item.subs" :key="i">{{item.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>

    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      router: true,
      openList: [],
      list: [
        {
          icon: 'el-icon-menu',
          index: 'adminIndex',
          title: '系统首页'
        },
        {
          icon: 'el-icon-tickets',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-message',
          index: '3',
          showSubs: false,
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: 'linkage',
              title: '三级联动'
            },
            {
              index: 'upload',
              title: '文件上传'
            },
            {
              index: 'excel',
              title: '导出excel'
            },
            {
              index: 'editor',
              title: '富文本编辑'
            }
          ]
        },
        {
          icon: 'el-icon-message',
          index: '4',
          showSubs: false,
          title: '插件相关',
          subs: [
            {
              index: 'preview',
              title: '图片预览'
            },
            {
              index: 'swiper',
              title: '图片特效'
            }
          ]
        },
        {
          icon: 'el-icon-setting',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-setting',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-picture-outline',
          index: 'drag',
          title: '拖拽列表'
        },
        {
          icon: 'el-icon-circle-close-outline',
          index: '6',
          title: '错误处理',
          showSubs: false,
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    showSusb (item) {
      if (!item.showSusb) {
        this.$set(item, 'showSubs', true)
        this.openList.push(item.index)
      }
    }
  }
}
</script>

<style scoped  lang="scss">
.menu {
  width: 240px;
  height: 100%;
  overflow-Y: auto;
  background-color: rgb(50, 65, 87);
  position: relative;
}
.menu::-webkit-scrollbar {
  display: none;
}
</style>
