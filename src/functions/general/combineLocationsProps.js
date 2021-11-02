
  // In stores.json each city has an array of location/s and each location has some basic props (needed across all milan websites)
  // Similarily in siteData.json each location of this current city has more props needed for this very website
  // Therefore, this function is needed to combine the 2 arrays coming from both 2 json files
  // IMPORTANT: make sure siteData.locations array contains all the locations in city.locations array
  // The 2 arrays lengths MUST be the same, otherwise it will throw many errors
  const combineLocationsProps = (siteData, city) => {
    let final_locations = []
    siteData.locations.forEach(elem => {
      let store = city.locations.find(loc => loc.location === elem.location)
      store = {...elem, ...store}
      store.pathname = store.location.trim().toLowerCase().replace(/\s+/g, '')
      final_locations.push(store)
    })
    siteData.locations = final_locations
  }

  export default combineLocationsProps