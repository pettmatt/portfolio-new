export const stringToUrlFriendly = (str) => {
  console.log(str)
  const stringArray = String(str).toLowerCase().split(' ')
  const urlFriendlyString = stringArray.map((string, index) => 
    string.concat((index !== stringArray.length-1) ? '%20' : '')
  )
  return urlFriendlyString.join('')
}