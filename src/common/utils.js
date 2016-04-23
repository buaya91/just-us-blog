export const propsToJS = obj => {
  const result = {}
  Object.keys(obj).forEach(k => {
    if (obj[k] && typeof obj[k].toJS === 'function') {
      result[k] = obj[k].toJS()
    } else {
      result[k] = obj[k]
    }
  })
  return result
}
