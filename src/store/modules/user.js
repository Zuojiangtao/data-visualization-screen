import storage from 'store'
import { login, getInfo } from '@/api/login'
import { ACCESS_TOKEN, REDIRECT_URL } from '@/store/storage-types'

const user = {
  state: {
    token: storage.get(ACCESS_TOKEN) || '',
    redirectUrl: storage.get(REDIRECT_URL) || '',
    name: storage.get('userName') || 'userName',
    avatar: '',
    menus: storage.get('menus') || [],
    roles: [],
    info: {},
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_REDIRECT_URL: (state, url) => {
      state.redirectUrl = url
    },
    SET_NAME: (state, { name }) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_MENUS: (state, { menus }) => {
      state.menus = menus
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const { ssoLoginUrl: url, ssoLogoutUrl: redirectUrl } = response.data
            typeof redirectUrl !== 'undefined' && storage.set(REDIRECT_URL, redirectUrl, 7 * 24 * 60 * 60 * 1000)
            storage.set(ACCESS_TOKEN, response.token, 7 * 24 * 60 * 60 * 1000)
            storage.set('userName', response.data.name, 7 * 24 * 60 * 60 * 1000)
            storage.set('menus', response.data.menus)
            typeof redirectUrl !== 'undefined' && commit('SET_REDIRECT_URL', redirectUrl)
            commit('SET_TOKEN', response.token)
            commit('SET_NAME', { name: response.data.name })
            commit('SET_MENUS', { menus: response.data.menus })
            resolve(url)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const result = response.result

            if (result.role && result.role.permissions.length > 0) {
              const role = result.role
              role.permissions = result.role.permissions
              role.permissions.map(per => {
                if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                  const action = per.actionEntitySet.map(action => {
                    return action.action
                  })
                  per.actionList = action
                }
              })
              role.permissionList = role.permissions.map(permission => {
                return permission.permissionId
              })
              commit('SET_ROLES', result.role)
              commit('SET_INFO', result)
            } else {
              reject(new Error('getInfo: roles must be a non-null array !'))
            }

            commit('SET_NAME', { name: 'result.name' })
            commit('SET_AVATAR', result.avatar)

            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise(resolve => {
        // logout(state.token)
        //   .then(() => {
        //     commit('SET_TOKEN', '')
        //     commit('SET_ROLES', [])
        //     storage.remove(ACCESS_TOKEN)
        //     resolve()
        //   })
        //   .catch(err => {
        //     console.log('logout fail:', err)
        //     // resolve()
        //   })
        //   .finally(() => {})
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        storage.remove(ACCESS_TOKEN)
        storage.remove('userName')
        resolve()
      })
    },

    // 清除保存信息
    Clear({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        storage.clearAll()
        resolve()
      })
    },
  },
}

export default user
