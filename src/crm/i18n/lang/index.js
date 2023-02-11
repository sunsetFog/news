import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from './en'
import zhLocale from './zh'

import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

// study: 国际多语言
const i18n = new VueI18n({
    // set locale
    // options: en | zh | ja
    locale: sessionStorage.getItem('language') || 'zh',
    // set locale messages
    messages: {
        en: {
            ...enLocale,
            ...elementEnLocale //合并ui英文翻译
        },
        zh: {
            ...zhLocale,
            ...elementZhLocale //合并ui中文翻译
        }
    }
})

export default i18n