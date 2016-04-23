export const propsToJS = obj => {
  const result = {}
  Object.keys(obj).forEach(k => {
    if (typeof obj[k].toJS === 'function') {
      result[k] = obj[k].toJS()
    } else {
      result[k] = obj[k]
    }
  })
  return result
}
