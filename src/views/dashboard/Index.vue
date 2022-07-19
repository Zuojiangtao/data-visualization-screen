<template>
  <div>
    111{{ $t('menus') }}
    <a-radio-group :default-value="lang" @change="changeLang" button-style="solid">
      <a-radio-button value="zh_CN"> 中文 </a-radio-button>
      <a-radio-button value="en_US"> 英文 </a-radio-button>
    </a-radio-group>
    <div>
      <a-pagination :default-current="1" :total="50" show-size-changer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  computed: {
    ...mapGetters(['lang']),
  },
  methods: {
    changeLang(e) {
      this.$store.dispatch('setLang', e.target.value)
    },
  },
}
</script>
