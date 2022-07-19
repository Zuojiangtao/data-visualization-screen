import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
import cloneDeep from 'lodash.clonedeep'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i].path)
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id)
  } else {
    return true
  }
}

function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

function filterAsyncPath(routerMap, permissions = []) {
  for (let i = 0; i < routerMap.length; i++) {
    permissions.push(routerMap[i].path)
    if (routerMap[i].children) {
      filterAsyncPath(routerMap[i].children, permissions)
    }
  }
  return permissions
}

const permission = {
  state: {
    routers: [], // 所有路由路径
    addRouters: [], // 有权限路由树
    permissions: [], // 有权限路由路径
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.routers = routers
    },
    SET_ADD_ROUTERS: (state, addRouters) => {
      state.addRouters = addRouters
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { menus } = data
        const routerMap = cloneDeep(asyncRouterMap)
        const accessedRouters = filterAsyncRouter(routerMap, menus)
        commit('SET_ROUTERS', filterAsyncPath(cloneDeep(constantRouterMap).concat(cloneDeep(asyncRouterMap))))
        commit('SET_ADD_ROUTERS', accessedRouters)
        commit('SET_PERMISSIONS', filterAsyncPath(cloneDeep(constantRouterMap).concat(cloneDeep(accessedRouters))))
        resolve()
      })
    },
  },
}

export default permission
