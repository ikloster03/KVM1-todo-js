import DebugLogger from './debug'
import { DEBUG, ERROR } from './levels'

const errorLog = (from, data) => {
  const debug = process.env.NODE_ENV !== 'production'
  const debugLogger = new DebugLogger(from, data)

  if (debug) {
    debugLogger.log(DEBUG)
  } else {
    debugLogger.log(ERROR)
  }
}

export default errorLog
