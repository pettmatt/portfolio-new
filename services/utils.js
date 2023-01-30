export const replaceCharacterInString = (str, replaceCharacter, spaceIndicator) => {
  const stringArray = String(str).split(replaceCharacter)
  // add new character seperator character
  const urlFriendlyString = stringArray.map((string, index) => 
    string.concat((index !== stringArray.length - 1) ? spaceIndicator : '')
  )
  // Create a string out of the array, without adding commas
  return urlFriendlyString.join('')
}