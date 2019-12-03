import Service from './service'
import SampleProvider from '@/api/provider/sample'

export default class ListService extends Service {
  constructor(rootURL) {
    super()
    this.service = new SampleProvider(rootURL)
  }

  fetch() {
    return this.service.fetchLists()
  }
}
