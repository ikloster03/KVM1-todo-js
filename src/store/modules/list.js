import {
  GET_INFO_ASYNC,
  SET_LISTS,
  ADD_LIST,
  DELETE_LIST,
} from '@/store/mutation-types'
import {
  state as baseState,
  mutations as baseMutation,
} from '@/store/modules/base'
import ListService from '@/api/service/list'
import errorLog from '@/api/logger'

const { PENDING, SUCCESS, FAILURE } = GET_INFO_ASYNC
const PATH = `${process.env.VUE_APP_ROOT_API}`
const service = new ListService(PATH)

const state = {
  ...baseState,
  lists: [],
}

const getters = {
  list: id => state.lists.find(list => list.id === id),
}

const actions = {
  async fetch({ commit }) {
    commit(PENDING)
    try {
      const { data } = await service.fetch()
      commit(SET_LISTS, data)
      commit(SUCCESS, false)
    } catch (error) {
      errorLog('list/fetch', error)
      commit(FAILURE, false)
    }
  },

  async create({ commit }, payload) {
    commit(PENDING, true)
    try {
      const { data } = await service.create(payload)
      commit(ADD_LIST, data)
      commit(SUCCESS, false)
    } catch (error) {
      errorLog('list/create', error)
      commit(FAILURE, false)
    }
  },

  async delete({ commit }, payload) {
    commit(PENDING, true)
    try {
      const { data } = await service.delete(payload)
      commit(DELETE_LIST, data)
      commit(SUCCESS, false)
    } catch (error) {
      errorLog('list/delete', error)
      commit(FAILURE, false)
    }
  },
}

const mutations = {
  ...baseMutation,
  [SET_LISTS](state, data) {
    state.lists = data
  },
  [ADD_LIST](state, data) {
    state.lists.push(data)
  },
  [DELETE_LIST](state, data) {
    const listIndex = state.lists.findIndex(list => list.id === data.id)
    state.lists.splice(listIndex, 1)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
