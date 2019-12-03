import Service from './service'
import SampleProvider from '@/api/provider/sample'

export default class TaskService extends Service {
  constructor(rootURL) {
    super()
    this.service = new SampleProvider(rootURL)
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
