import Service from './service'
import SampleClient from '@/api/client/sample'

export default class ListService extends Service {
  constructor(rootURL) {
    super()
    this.service = new SampleClient(rootURL)
  }

  fetch() {
    return this.service.fetchLists()
  }
}
