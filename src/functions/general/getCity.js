import stores from '../../data/stores.json'

// To be called in menu.js & isMultiple.js
// Find the current city from stores list
// Returns city object
function getCity(siteData) {
  let city
  city = stores.locations.find(state => {
    if(state.state === siteData.state) return state.stores.some(findLocation)
    return false
  }).stores.find(findLocation)

  function findLocation(elem) {
    return elem.city === siteData.city
  }
  return city
}

export default getCity
