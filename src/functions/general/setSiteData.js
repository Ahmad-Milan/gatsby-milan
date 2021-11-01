import stores from '../../data/stores.json'

// To be called in the Layout Comp
// Returns siteData obj
function setSiteData(pathname, stateShort) {
 
  // 1. Find the matching state from the stores list
  let currentState = stores.locations.find(state => state.stateShort === stateShort)
  // 2. Find the current city in that state
  let currentCity = currentState.stores.find(city => city.pathname === pathname.toLowerCase())

  // 3. Create a siteData object
  const siteData = {
    "origin": `https://milanlaser${currentCity.pathname.toLowerCase()}.com/`,
    "state": currentState.state,
    "stateShort": currentState.stateShort,
    "city": currentCity.city
  }
  // if the city is a single location city, add a salesforceValue prop
  if(currentCity.locations.length === 1) {
    siteData.salesforceValue = currentCity.locations[0].salesforceValue
  }
  return siteData
}

export default setSiteData
