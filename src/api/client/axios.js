import axios from 'axios'
import Client from './client'

export default class AxiosClient extends Client {
  constructor(rootURL) {
    super(rootURL)
  }

  fetch(params) {
    return axios.get(`${this.rootURL}/api/data`, { params: params })
  }
}
