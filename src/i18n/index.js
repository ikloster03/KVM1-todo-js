import Vue from 'vue'
import VueI18n from 'vue-i18n'
import dictionary from '@/assets/dictionary.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  messages: dictionary,
})
