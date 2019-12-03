export default class Provider {
  constructor(rootURL) {
    this.rootURL = rootURL
  }

  fetchTasks() {
    return fetch(`${this.rootURL}/api/data`)
  }
}
