import Vue from 'vue'
import Vuex from 'vuex'
import task from './modules/task'
import list from './modules/list'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    task,
    list,
  },
  strict: debug,
})
