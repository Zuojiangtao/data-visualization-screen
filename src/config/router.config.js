// eslint-disable-next-line
import { UserLayout, BasicLayout } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view'),
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: {
      title: '首页',
      permission: ['dashboard'],
    },
    redirect: '/dashboard',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouteView,
        meta: {
          title: '平台预览',
          icon: 'home',
          permission: ['dashboard'],
        },
        redirect: '/dashboard/Index',
        children: [
          {
            path: '/dashboard/Index',
            name: 'Index',
            component: () => import('@/views/dashboard/Index'),
            meta: { title: '首页', keepAlive: true, permission: ['dashboard'] },
          },
        ],
      },
      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: {
          title: '异常页',
          icon: 'warning',
          permission: ['exception'],
        },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: {
              title: '403',
              permission: ['exception'],
            },
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: {
              title: '404',
              permission: ['exception'],
            },
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: {
              title: '500',
              permission: ['exception'],
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
    hidden: true,
  },
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/403',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login'),
      },
    ],
  },
]
