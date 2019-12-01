import { SET_TASKS } from '@/store/mutation-types'
import TaskService from '@/api/service/task'
import errorLog from '@/api/logger'

const PATH = `${process.env.VUE_APP_ROOT_API}`
const service = new TaskService(PATH)

const state = {
  tasks: [],
}

const getters = {
  task: id => state.tasks.find(task => task.id === id),
  completedTasks: () => state.tasks.filter(task => task.completed),
  uncompletedTasks: () => state.tasks.filter(task => !task.completed),
  // todayTasks: () => state.tasks.filter(task => task.date),
}

const actions = {
  async getTasks({ commit }) {
    try {
      const { data } = await service.fetch()
      commit(SET_TASKS, data)
    } catch (error) {
      errorLog('task/getTasks', error)
    }
  },
  async createTask({ commit }, payload) {
    try {
      const { data } = await service.create(payload)
      commit(SET_TASKS, data)
    } catch (error) {
      errorLog('task/createTask', error)
    }
  },
}

const mutations = {
  [SET_TASKS](state, data) {
    state.tasks = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
