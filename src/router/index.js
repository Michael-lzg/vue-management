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
      children: [
        {
          path: 'adminIndex',
          name: 'adminIndex',
          component: (resolve) => {
            require(['../views/pages/adminIndex'], resolve)
          }
        },
        {
          path: 'table',
          name: 'table',
          component: (resolve) => {
            require(['../views/pages/table'], resolve)
          }
        },
        {
          path: 'form',
          name: 'form',
          component: (resolve) => {
            require(['../views/pages/form'], resolve)
          }
        },
        {
          path: 'linkage',
          name: 'linkage',
          component: (resolve) => {
            require(['../views/pages/linkage'], resolve)
          }
        },
        {
          path: 'upload',
          name: 'upload',
          component: (resolve) => {
            require(['../views/pages/upload'], resolve)
          }
        },
        {
          path: 'excel',
          name: 'excel',
          component: (resolve) => {
            require(['../views/pages/excel'], resolve)
          }
        },
        {
          path: 'editor',
          name: 'editor',
          component: (resolve) => {
            require(['../views/pages/editor'], resolve)
          }
        },
        {
          path: 'icon',
          name: 'icon',
          component: (resolve) => {
            require(['../views/pages/icon'], resolve)
          }
        },
        {
          path: 'charts',
          name: 'charts',
          component: (resolve) => {
            require(['../views/pages/charts'], resolve)
          }
        },
        {
          path: 'drag',
          name: 'drag',
          component: (resolve) => {
            require(['../views/pages/drag'], resolve)
          }
        },
        {
          path: 'permission',
          name: 'permission',
          component: (resolve) => {
            require(['../views/pages/permission'], resolve)
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
