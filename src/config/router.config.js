// eslint-disable-next-line
// import { BasicLayout } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "index" */ '@/views/datav/index'),
    meta: {
      title: 'H3C 产业大脑',
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
