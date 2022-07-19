<template>
  <a-config-provider :locale="antLocale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['antLocale']),
  },
}
</script>
