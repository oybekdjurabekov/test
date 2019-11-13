import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from './constants/trans.js'
import ru from './lang/ru.json'
export default  new VueI18n({
  locale: 'ru', 
  fallbackLocale:'ru',
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { ru }// set locale messages
})
