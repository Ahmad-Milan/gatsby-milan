import allLocations from '../../data/allLocations.json'

const getStore = (event) => {
  let filteredStore
  filteredStore = allLocations.locations.find(element => {
    return element.stores.some(findLocation)
  }).stores.find(findLocation)

  function findLocation(elem) {
    // Single Location: if the location is a single location in a city
    if(elem.location) {
      return elem.salesforceValue === event.target.value
    }
    // Multiple Locations: if the location is one of many locations in a city
    if(elem.locations) {
      return elem.locations.some(elem => elem.salesforceValue === event.target.value)
    }
  }

  // if the selected location is one of many locations, filteredStore would be an array of all nearby locations, So...
  if(filteredStore.locations) {
    filteredStore = filteredStore.locations.find(location => location.salesforceValue === event.target.value)
  }
  return filteredStore
}

export default getStore