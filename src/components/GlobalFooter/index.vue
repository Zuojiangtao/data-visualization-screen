<template>
  <global-footer class="footer custom-render">
    <template #links> </template>
    <template #copyright>
      <a>页脚内容</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter,
  },
}
</script>
