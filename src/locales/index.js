import Vue from 'vue'
import VueI18n from 'vue-i18n'
import language from '@/locales/lang'
import storage from 'store'
import {
  // i18n
  APP_LANGUAGE,
} from '@/store/mutation-types'

Vue.use(VueI18n)

const curLang = storage.get(APP_LANGUAGE) || 'zh_CN'
export const i18n = new VueI18n({
  // 设置语言环境
  locale: curLang,
  // 配置预设语言环境
  fallbackLocale: 'zh_CN',
  silentFallbackWarn: true,
  // 设置语言环境信息
  messages: {
    zh_CN: language[curLang],
  },
})

function setI18nLanguage(lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  // 如果语言相同
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }
  // 如果尚未加载语言
  return new Promise((resolve, reject) => {
    // 本地语言包
    i18n.setLocaleMessage(lang, language[lang])
    resolve(setI18nLanguage(lang))
    // 模拟异步加载语言包
    // setTimeout(() => {
    //   i18n.setLocaleMessage(lang, {
    //     menus: 'menus',
    //   })
    //   resolve(setI18nLanguage(lang))
    // }, 1000)
  })
}
