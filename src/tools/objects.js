export const isEmpty = obj => {
  if (typeof obj !== 'object') {
    throw new Error()
  }

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }

  return JSON.stringify(obj) === JSON.stringify({})
}

export const deepClone = obj => {
  if (typeof obj !== 'object') {
    throw new Error()
  }

  return JSON.parse(JSON.stringify(obj))
}
