import Service from './service'
import SampleClient from '@/api/client/sample'

export default class TaskService extends Service {
  constructor(rootURL) {
    super()
    this.service = new SampleClient(rootURL)
  }

  fetch() {
    return this.service.fetchTasks()
  }

  fetchByList(params) {
    return this.service.fetchTasksByList(params)
  }

  create(params) {
    return this.service.createTask(params)
  }
}
