<template>
  <div class="breadcrumb">
    <breadcrumb style="margin-right: 10px; width: 10px; height: 14px; position: relative; top: 1px"></breadcrumb>
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
        <router-link v-if="item.name != name && index != 1" :to="{ path: item.path === '' ? '/' : item.path }">
          {{ item.meta.title }}
        </router-link>
        <span v-else>{{ item.meta.title }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import breadcrumb from '@/assets/icons/breadcrumbIcon.svg?inline'

export default {
  components: {
    breadcrumb,
  },
  data() {
    return {
      name: '',
      breadList: [],
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      this.breadList = []
      this.name = this.$route.name
      this.$route.matched.forEach(item => {
        // 兼容url带参数的情况
        const params = this.$route.params
        if (item.path.includes(':')) {
          const path = item.path.split('/')
          for (let [key, value] of Object.entries(params)) {
            for (let i = 0; i < path.length; i++) {
              if (path[i].includes(key)) {
                path[i] = value
              }
            }
          }
          item.path = path.join('/')
        }
        // item.name !== 'index' && this.breadList.push(item)
        !item.meta.hideBreadcrumb && this.breadList.push(item)
      })
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    },
  },
}
</script>

<style scoped>
.breadcrumb {
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding-left: 27px;
}
</style>
