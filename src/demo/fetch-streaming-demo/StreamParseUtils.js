/**
 * find valid json elements from arg
 * @param bytesDump - array of strings potentially which is parts of json array
 * @return [Array, String] - json element(s) found and whatever left
 */
export function parseObj(bytesDump) {
  const regex = /[,\[]?(\{\s*(?="\w*":)(?:.|\n)*\})/g

  const execResult = regex.exec(bytesDump)
  let matched = []
  if (execResult) {
    execResult.shift()
    console.log(execResult)
    matched = execResult.map(m => JSON.parse(m))
  }
  const left = bytesDump.replace(regex, '')
  return [matched, left]
}
