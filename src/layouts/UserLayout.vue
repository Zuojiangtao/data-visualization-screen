<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <div class="top">
        <logo-svg style="display: inline-block; margin-left: 14px"></logo-svg>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'
import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'UserLayout',
  mixins: [deviceMixin],
  components: {
    LogoSvg,
  },
  mounted() {
    document.body.classList.add('userLayout')
  },
  beforeDestroy() {
    document.body.classList.remove('userLayout')
  },
}
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url('@/assets/login.png') no-repeat 50%;
    background-size: 100%;
    position: relative;

    .top {
      width: 100%;
      height: 8.9vh;
      background: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
    }
  }
}
</style>
