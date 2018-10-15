import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: (resolve) => {
        require(['../views/login'], resolve)
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: (resolve) => {
        require(['../views/admin'], resolve)
      },
      redirect: 'admin/adminIndex',
      children: [
        {
          path: 'adminIndex',
          name: 'adminIndex',
          meta: {title: '系统首页'},
          component: (resolve) => {
            require(['../views/pages/adminIndex'], resolve)
          }
        },
        {
          path: 'table',
          name: 'table',
          meta: {title: '基础表格'},
          component: (resolve) => {
            require(['../views/pages/table'], resolve)
          }
        },
        {
          path: 'form',
          name: 'form',
          meta: {title: '基础表单'},
          component: (resolve) => {
            require(['../views/pages/form'], resolve)
          }
        },
        {
          path: 'linkage',
          name: 'linkage',
          meta: {title: '三级联动'},
          component: (resolve) => {
            require(['../views/pages/linkage'], resolve)
          }
        },
        {
          path: 'upload',
          name: 'upload',
          meta: {title: '文件上传'},
          component: (resolve) => {
            require(['../views/pages/upload'], resolve)
          }
        },
        {
          path: 'excel',
          name: 'excel',
          meta: {title: '导出excel'},
          component: (resolve) => {
            require(['../views/pages/excel'], resolve)
          }
        },
        {
          path: 'editor',
          name: 'editor',
          meta: {title: '富文本编辑'},
          component: (resolve) => {
            require(['../views/pages/editor'], resolve)
          }
        },
        {
          path: 'icon',
          name: 'icon',
          meta: {title: '自定义图标'},
          component: (resolve) => {
            require(['../views/pages/icon'], resolve)
          }
        },
        {
          path: 'charts',
          name: 'charts',
          meta: {title: 'charts图标'},
          component: (resolve) => {
            require(['../views/pages/charts'], resolve)
          }
        },
        {
          path: 'drag',
          name: 'drag',
          meta: {title: '拖拽列表'},
          component: (resolve) => {
            require(['../views/pages/drag'], resolve)
          }
        },
        {
          path: 'permission',
          name: 'permission',
          meta: {title: '权限测试'},
          component: (resolve) => {
            require(['../views/pages/permission'], resolve)
          }
        },
        {
          path: 'preview',
          name: 'preview',
          meta: {title: '图片预览'},
          component: (resolve) => {
            require(['../views/pages/preview'], resolve)
          }
        }
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: (resolve) => {
        require(['../views/error'], resolve)
      }
    }
  ]
})

export default router
