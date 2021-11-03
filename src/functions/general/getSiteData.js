import stores from '../../data/stores.json'
import siteData from '../../data/siteData.json'
import combineLocationsProps from './combineLocationsProps'

// To be called in the Layout Comp
// Returns siteData obj
function getSiteData() {
  // 1. Find the matching state from the stores list
  let currentState = stores.find(state => state.stateShort === siteData.stateShort)
  // 2. Find the current city in that state
  let currentCity = currentState.stores.find(city => city.pathname === siteData.pathname.toLowerCase())
  // 3. Add more props to siteData obj
  siteData.origin = `https://milanlaser${siteData.pathname.toLowerCase()}.com/`
  siteData.state = currentState.state
  siteData.stateShort = currentState.stateShort
  siteData.open = currentCity.locations.some(location => location.open === true) // returns Boolean
  siteData.multiple = currentCity.locations.length > 1 ? true : false

  combineLocationsProps(siteData, currentCity)

  console.log(siteData)
  return siteData
}

export default getSiteData
