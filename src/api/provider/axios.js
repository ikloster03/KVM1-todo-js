import axios from 'axios'
import Provider from './provider'

export default class AxiosProvider extends Provider {
  constructor(rootURL) {
    super(rootURL)
  }

  fetch(params) {
    return axios.get(`${this.rootURL}/api/data`, { params: params })
  }
}
