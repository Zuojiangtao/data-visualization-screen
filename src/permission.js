import router from './router'
import store from './store'
// import { ADD_KEEP_ALIVE_VIEW, DEL_KEEP_ALIVE_VIEW } from '@/store/mutation-types'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
// import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'findPwd', 'Index'] // no redirect whitelist
const loginRoutePath = '/login'
const defaultRoutePath = '/'

// 根据地址判断访问地址是否存在
// function hasPermissionByPath(to) {
//   const routers = store.getters.routers
//   // console.log('store.getters.routers', routers)
//   if (!routers || routers.length === 0) {
//     // 项目无访问地址
//     return false
//   }
//   if (routers.includes(to.path)) {
//     return true
//   } else {
//     return false
//   }
// }

// 根据地址判断是否有权限访问
// function hasPermissionByPrivilege(to) {
//   const permissions = store.getters.permissions
//   // console.log('store.getters.permissions', permissions)
//   if (!permissions || permissions.length === 0) {
//     // 用户无权限列表数据
//     return false
//   }
//   if (permissions.includes(to.path)) {
//     return true
//   } else {
//     return false
//   }
// }

router.beforeEach(async (to, from, next) => {
  NProgress.start() // start progress bar
  const toMeta = to.meta || {}
  // setDocumentTitle
  typeof toMeta.title !== 'undefined' && setDocumentTitle(`${domTitle} - ${toMeta.title}`)
  // const fromMeta = from.meta || {}
  // keepalive
  // if (toMeta.keepAlive) {
  //   // to页面需要缓存, 多级roter-view keep-alive会失效，所有需要缓存父组件
  //   const keepAliveNames = []
  //   to.matched.map(item => {
  //     if (item.meta.keepAlive) {
  //       keepAliveNames.push(item.name)
  //     }
  //   })
  //   store.commit(ADD_KEEP_ALIVE_VIEW, keepAliveNames)
  // }
  // if (fromMeta.keepAlive && !fromMeta.keepAliveViews.includes(to.name)) {
  //   // from页面为缓存页面时，如果to页不需要缓存from页时，删除from页面及其父组件的缓存
  //   from.matched.map(item => {
  //     if (item.meta.keepAlive) {
  //       store.commit(DEL_KEEP_ALIVE_VIEW, item.name)
  //     }
  //   })
  // }

  const { token } = store.getters
  /* has token */
  if (token) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      next()
      // if (store.getters.addRouters.length === 0) {
      //   try {
      //     // const userInfo = await store.dispatch('GetInfo', { userId })
      //     store.dispatch('GenerateRoutes', { menus: store.getters.menus }).then(() => {
      //       // 动态添加可访问路由表
      //       // VueRouter@3.5.0+ New API
      //       // store.getters.addRouters.forEach(r => {
      //       //   router.addRoute(r)
      //       // })
      //       const redirect = decodeURIComponent(from.query.redirect || to.path)
      //       if (to.path === redirect) {
      //         // set the replace: true so the navigation will not leave a history record
      //         next({ ...to, replace: true })
      //       } else {
      //         // 跳转到目的路由
      //         next({ path: defaultRoutePath })
      //       }
      //     })
      //   } catch (e) {
      //     store.dispatch('Logout').then(() => next({ path: loginRoutePath, query: { redirect: to.fullPath } }))
      //   }
      //   // await store.dispatch('LoadDictionary')
      // } else if (!hasPermissionByPath(to)) {
      //   next({ path: '/404' })
      // } else if (!hasPermissionByPrivilege(to)) {
      //   next({ path: '/403' })
      // } else {
      //   next()
      // }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
