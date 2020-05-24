export const trimParam = (param, trimChars) => {
  if (!Array.isArray(trimChars) || trimChars.length === 0 || trimChars.some(char => char.length !== 1)) {
    throw new Error('unexpected trimChars')
  }
  const length = param.length
  let start = 0
  let end = length
  for (let i = 0; i < length; i++) {
    if (trimChars.includes(param[i])) {
      start += 1
    } else {
      break
    }
  }
  for (let i = length - 1; i; i--) {
    if (trimChars.includes(param[i])) {
      end -= 1
    } else {
      break
    }
  }
  return param.substring(start, end)
}