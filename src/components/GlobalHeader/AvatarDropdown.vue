<template>
  <div class="ant-pro-account-avatar">
    <a-badge dot :count="1" :offset="[-5, 5]" style="margin-right: 20px" @click="goMessage">
      <a-icon style="font-size: 16px" type="bell" />
    </a-badge>
    <a-dropdown v-if="currentUser && currentUser.name" placement="bottomRight">
      <span>
        <span>{{ currentUser.name }}</span>
        <a-avatar size="small" :src="currentUser.icon" class="antd-pro-global-header-index-avatar" />
      </span>
      <template #overlay>
        <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
          <a-menu-item v-if="menu" key="center" @click="handleToCenter">
            <a-icon type="user" />
            账号信息
          </a-menu-item>
          <a-menu-item v-if="menu" key="settings" @click="handleToPassword">
            <a-icon type="edit" />
            修改密码
          </a-menu-item>
          <a-menu-divider v-if="menu" />
          <a-menu-item key="logout" @click="handleLogout">
            <a-icon type="export" />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <span v-else>
      <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AvatarDropdown',
  props: {
    currentUser: {
      type: Object,
      default: () => null,
    },
    menu: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ...mapMutations(['SET_ROUTERS', 'SET_PERMISSIONS']),
    goMessage() {
      const { href } = this.$router.resolve({
        path: '/message',
      })
      window.open(href, '_blank')
    },
    handleToCenter() {
      this.$router.push({ path: '/system/account' })
    },
    handleToPassword() {
      this.$router.push({ path: '/system/password' })
    },
    handleLogout(e) {
      const originUrl = `${this.$store.getters.redirectUrl}${window.location.origin}${this.$route.path}`
      this.$confirm({
        title: '退出登录',
        content: '是否退出登录',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          return this.$store
            .dispatch('Logout')
            .then(() => {
              this.SET_ROUTERS([]) // 清空路由
              this.SET_PERMISSIONS([]) // 清空权限
              window.location.href = originUrl
              // this.$router.push({ name: 'login' })
            })
            .catch(e => console.error(e))
            .finally(() => {})
        },
        onCancel() {},
      })
    },
  },
}
</script>

<style lang="less" scoped>
.ant-pro-account-avatar {
  display: flex;
  align-items: center;
  .antd-pro-global-header-index-avatar {
    margin-left: 13px;
  }
}

.ant-pro-drop-down {
  /deep/ .action {
    margin-right: 8px;
  }
  /deep/ .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
</style>
