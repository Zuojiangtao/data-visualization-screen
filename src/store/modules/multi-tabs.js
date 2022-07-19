import storage from 'store'
import { KEEP_ALIVE_TAB, KEEP_ALIVE_FULL_PATH, CURRENT_TAB_ACTIVE_KEY } from '../storage-types'

const multiTabs = {
  state: {
    keepAlive: ['Index'], // 需要缓存的页面路由 - name
    activeTabList: storage.get(KEEP_ALIVE_TAB) || [], // 所有激活的tab列表 - route
    activeFullPath: storage.get(KEEP_ALIVE_FULL_PATH) || [], // 激活的multiTab路由path列表 - path
    currentTabActiveKey: storage.get(CURRENT_TAB_ACTIVE_KEY) || '', // 当前multiTab激活id - id
  },
  mutations: {
    ADD_KEEP_ALIVE_TABS: (state, tabs) => {
      const tab = state.activeTabList.findIndex(item => item.fullPath === tabs.fullPath)
      tab < 0 && state.activeTabList.push(tabs)
      storage.set(KEEP_ALIVE_TAB, state.activeTabList)
    },
    DEL_KEEP_ALIVE_TABS: (state, tabKey) => {
      const tabIdx = state.activeTabList.findIndex(item => item.fullPath === tabKey)
      state.activeTabList.splice(tabIdx, 1)
      storage.set(KEEP_ALIVE_TAB, state.activeTabList)
    },
    ADD_KEEP_ALIVE_FULL_PATH: (state, fullPath) => {
      const path = state.activeFullPath.indexOf(fullPath)
      path < 0 && state.activeFullPath.push(fullPath)
      storage.set(KEEP_ALIVE_FULL_PATH, state.activeFullPath)
    },
    DEL_KEEP_ALIVE_FULL_PATH: (state, fullPathKey) => {
      const pathIdx = state.activeFullPath.findIndex(item => item === fullPathKey)
      state.activeFullPath.splice(pathIdx, 1)
      storage.set(KEEP_ALIVE_FULL_PATH, state.activeFullPath)
    },
    SET_ACTIVE_TAB_KEY: (state, activeKey) => {
      state.currentTabActiveKey = activeKey
    },
  },
  actions: {
    // 将tab - route加入到缓存列表
    addKeepAliveTab({ commit }, tabRoute) {
      return new Promise(resolve => {
        commit('ADD_KEEP_ALIVE_TABS', tabRoute)
        resolve()
      })
    },

    // 从缓存列表删除tab
    deleteKeepAliveTab({ commit }, tabRouteKey) {
      return new Promise(resolve => {
        commit('DEL_KEEP_ALIVE_TABS', tabRouteKey)
        resolve()
      })
    },

    // 将fullPath - path加入到vuex
    addKeepAliveFullPath({ commit }, fullPath) {
      return new Promise(resolve => {
        commit('ADD_KEEP_ALIVE_FULL_PATH', fullPath)
        resolve()
      })
    },

    // 从缓存删除fullPath
    deleteKeepAliveFullPath({ commit }, fullPathKey) {
      return new Promise(resolve => {
        commit('DEL_KEEP_ALIVE_FULL_PATH', fullPathKey)
        resolve()
      })
    },

    // 设置激活tab
    setActiveKey({ commit }, activeKey) {
      return new Promise(resolve => {
        storage.set(CURRENT_TAB_ACTIVE_KEY, activeKey)
        commit('SET_ACTIVE_TAB_KEY', activeKey)
        resolve()
      })
    },
  },
}

export default multiTabs
