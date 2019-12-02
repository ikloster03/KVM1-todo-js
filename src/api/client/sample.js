import Client from './client'
import { LISTS, TASKS } from '../sample/data'

const TIMEOUT = 2000

const throttling = cb =>
  new Promise(resolve => {
    setTimeout(() => {
      cb(resolve)
    }, TIMEOUT)
  })

export default class TestClient extends Client {
  constructor(rootURL) {
    super(rootURL)
  }

  fetchTasks() {
    return throttling(resolve => {
      resolve({
        data: TASKS,
      })
    })
  }

  createTask({ title }) {
    return throttling(resolve => {
      const oldId = Math.max.apply(
        Math,
        TASKS.map(task => task.id)
      )
      const newId = oldId + 1
      resolve({
        data: {
          id: newId,
          title: title,
          completed: false,
          list_id: null,
          date: new Date().toLocaleDateString(),
        },
      })
    })
  }

  deleteTask({ task }) {
    return throttling(resolve => {
      resolve({
        data: task,
      })
    })
  }

  fetchTasksByList({ listId }) {
    return throttling(resolve => {
      resolve({
        data: TASKS.filter(task => task.list_id === listId),
      })
    })
  }

  fetchLists() {
    return throttling(resolve => {
      resolve({
        data: LISTS,
      })
    })
  }
}
