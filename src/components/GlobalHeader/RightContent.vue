<template>
  <div :class="wrpCls">
    <avatar-dropdown :menu="showMenu" :current-user="{ name: userName }" :class="prefixCls" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AvatarDropdown from './AvatarDropdown'

export default {
  name: 'RightContent',
  components: {
    AvatarDropdown,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-global-header-index-action',
    },
    isMobile: {
      type: Boolean,
      default: () => false,
    },
    topMenu: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showMenu: true,
    }
  },
  computed: {
    ...mapGetters(['userAvatar', 'userName']),
    wrpCls() {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-${this.isMobile || !this.topMenu ? 'light' : this.theme}`]: true,
      }
    },
  },
}
</script>
