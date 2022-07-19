// eslint-disable-next-line
// import { UserLayout, BasicLayout } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'

// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view'),
// }

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/index'),
    meta: {
      title: '首页',
      permission: ['dashboard'],
    },
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
]
