import stores from '../../data/stores.json'
import isMultiple from './isMultiple'
import updateCurrentCity from './updateCurrentCity'

// Find the current city from stores list
// Check if the site has multiple locations & if Open
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

  // Check if the site has multiple locations & if Open
  isMultiple(siteData, city)
  
  // this function will add more props to the city.locations elements
  updateCurrentCity(city)

  return city
}

export default getCity
