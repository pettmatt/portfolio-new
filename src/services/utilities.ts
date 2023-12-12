export const replaceCharacterInString = (str: string, replaceCharacter: string, spaceIndicator: string) => {
    const stringArray = String(str).split(replaceCharacter)

    const urlFriendlyString = stringArray.map((string, index) => 
        string.concat((index !== stringArray.length - 1) ? spaceIndicator : "")
    )

    return urlFriendlyString.join("")
}