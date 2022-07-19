const getters = {
  // app
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  isMobile: state => state.app.isMobile,
  lang: state => state.app.lang,
  antLocale: state => state.app._antLocale,
  multiTab: state => state.app.multiTab,
  keepAliveViews: state => state.app.keepAliveViews,
  // user
  token: state => state.user.token,
  redirectUrl: state => state.user.redirectUrl,
  avatar: state => state.user.avatar,
  position: state => state.user.position,
  nickname: state => state.user.name,
  isInside: state => state.user.isInside,
  isCompany: state => state.user.isCompany,
  mobile: state => state.user.mobile,
  email: state => state.user.email,
  status: state => state.user.status,
  createTime: state => state.user.createTime,
  lastAuthTime: state => state.user.lastAuthTime,
  welcome: state => state.user.welcome,
  menus: state => state.user.menus,
  roles: state => state.user.roles,
  refreshToken: state => state.user.refreshToken,
  userId: state => state.user.userId,
  tenantId: state => state.user.tenantId,
  userInfo: state => state.user.userInfo,
  userAvatar: state => state.user.userInfo.icon,
  userName: state => state.user.name,
  // permission
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  permissions: state => state.permission.permissions,
  hasPermission: state => action => {
    // console.log(action, state.user.permissions.find(item => item === action))
    return !!state.permission.permissions.find(item => item === action)
  },
}

export default getters
