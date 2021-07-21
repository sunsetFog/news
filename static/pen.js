










element-ui英文版:
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {locale})

element-ui多语言切换
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './langs/zh'
import en from './langs/en'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
 
Vue.use(VueI18n)
 
const messages = {
  en: Object.assign(en, enLocale),
  zh: Object.assign(zh, zhLocale)
}
 
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages
})
Vue.use(Element, {
  size: Cookies.get('size') || 'mini', // set element-ui default size 
  i18n: (key, value) => i18n.t(key, value)
})









$tc , $t , $te , v-t

1.$tc 用于复数，例如英文一般分单复数
apple: 'no apples | one apple | {count} apples',

2.$t用于非复数
3.$te 返回的是boolean值，判断key是否存在。

4.v-t 指令
 <!-- 写法：字符串---双单引号包裹 -->
  <p v-t="'hello'"></p >
  <!-- 写法：数据绑定 -->
  <p v-t="path"></p >


  马市，菜鸟教程，k发帮,我要自学网









