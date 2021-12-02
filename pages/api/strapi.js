function getStrapiURL(path = '') {
  return `${
    /*process.env.NEXT_PUBLIC_URL ||*/ 'http://localhost:8085/' + path
  }`
}

export async function fetchMyThings(path) {
  const url = getStrapiURL(path)
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export async function createArrayFromObject(obj) {
  let newData = [];
  // Create new object from data
  obj.then(
    o => {
      for (var key in o) {
        if (Object.prototype.hasOwnProperty.call(o, key)) {
          const val = o[key];
          newData.push(val)
        }
      }
    }
  )

  return newData
}