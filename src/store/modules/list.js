import { SET_LISTS } from '@/store/mutation-types'
import ListService from '@/api/service/list'

const PATH = `${process.env.VUE_APP_ROOT_API}`
const service = new ListService(PATH)

const state = {
  lists: [],
}

const getters = {
  list: id => state.lists.find(list => list.id === id),
}

const actions = {
  async fetch({ commit }) {
    const { data } = await service.fetch()
    commit(SET_LISTS, data)
  },
}

const mutations = {
  [SET_LISTS](data) {
    state.lists = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
