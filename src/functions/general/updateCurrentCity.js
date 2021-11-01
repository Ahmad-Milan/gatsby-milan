import siteLocations from '../../data/site-locations.json'

// This function will combine the site locations props with props coming from site-locations.json
// IMPORTANT: make sure site-locations array contains all the locations in city.locations array
// The 2 arrays lengths MUST be the same, otherwise it will throw many errors
let final_locations = []
const updateCurrentCity = (city) => {
  siteLocations.locations.forEach(elem => {
    let store = city.locations.find(loc => loc.location === elem.location)
    store = {...elem, ...store}
    store.pathname = store.location.trim().toLowerCase().replace(/\s+/g, '')
    final_locations.push(store)
  })
  city.locations = final_locations
}
export default updateCurrentCity