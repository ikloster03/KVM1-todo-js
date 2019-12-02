import {
  GET_INFO_ASYNC,
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
} from '@/store/mutation-types'
import {
  state as baseState,
  mutations as baseMutation,
} from '@/store/modules/base'
import TaskService from '@/api/service/task'
import errorLog from '@/api/logger'

const { PENDING, SUCCESS, FAILURE } = GET_INFO_ASYNC
const PATH = `${process.env.VUE_APP_ROOT_API}`
const service = new TaskService(PATH)

const state = {
  ...baseState,
  tasks: [],
}

const getters = {
  task: id => state.tasks.find(task => task.id === id),
  completedTasks: () => state.tasks.filter(task => task.completed),
  uncompletedTasks: () => state.tasks.filter(task => !task.completed),
  // todayTasks: () => state.tasks.filter(task => task.date),
}

const actions = {
  async fetch({ commit }) {
    commit(PENDING)
    try {
      const { data } = await service.fetch()
      commit(SET_TASKS, data)
      commit(SUCCESS, false)
    } catch (error) {
      errorLog('task/fetch', error)
      commit(FAILURE, false)
    }
  },
  async create({ commit }, payload) {
    commit(PENDING, true)
    try {
      const { data } = await service.create(payload)
      commit(ADD_TASK, data)
      commit(SUCCESS, false)
    } catch (error) {
      errorLog('task/create', error)
      commit(FAILURE, false)
    }
  },
  async delete({ commit }, payload) {
    commit(PENDING, true)
    try {
      const { data } = await service.delete(payload)
      commit(ADD_TASK, data)
      commit(SUCCESS, false)
    } catch (error) {
      errorLog('task/delete', error)
      commit(FAILURE, false)
    }
  },
}

const mutations = {
  ...baseMutation,
  [SET_TASKS](state, data) {
    state.tasks = data
  },
  [ADD_TASK](state, data) {
    state.tasks.push(data)
  },
  [DELETE_TASK](state, data) {
    const taskIndex = state.tasks.findIndex(task => task.id === data.id)
    state.tasks.splice(taskIndex, 1)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
