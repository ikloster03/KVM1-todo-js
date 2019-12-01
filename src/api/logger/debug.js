import Logger from './logger'
import { DEBUG, WARN, ERROR } from './levels'
export default class DebugLogger extends Logger {
  constructor(from, error) {
    super(from, error)
  }
  log(level) {
    if (level === DEBUG || level === WARN || level === ERROR) {
      console[level](`${this.from}: `, this.error)
    } else {
      console.error('Level is not exist!')
    }
  }
}
