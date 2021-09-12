import allLocations from '../../../data/allLocations.json'
import getNearbyLocations from '../../../data/getNearbyLocations'

function updateDropdown(event, formState) {
  let filteredStore
  filteredStore = allLocations.locations.filter(element => {
    return element.stores.some(findLocation)
  })[0].stores.filter(findLocation)[0]

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
    filteredStore = filteredStore.locations.filter(location => location.salesforceValue === event.target.value)[0]
  }
    
  const updatedFormState = { ...formState }
  updatedFormState.store.salesforceValue = filteredStore.salesforceValue
  updatedFormState.store.zipcode = filteredStore.zipcode
  updatedFormState.store.address = filteredStore.address
  updatedFormState.store.location = filteredStore.location
  updatedFormState.store.locationOnAddress = filteredStore.locationOnAddress
  updatedFormState.store.stateShort = filteredStore.stateShort
  updatedFormState.store.virtual = filteredStore.virtual
  updatedFormState.store.open = filteredStore.open
  updatedFormState.store.virtualZip = "010101"

  if(!filteredStore.virtual) updatedFormState.include.consultType = 'Consult'
  if(filteredStore.virtual) updatedFormState.include.consultType = ''

  getNearbyLocations().map(store => store.selected = false)
  const nearbyStore = getNearbyLocations().filter(store => (
    store.salesforceValue === filteredStore.salesforceValue
  ))
  if(nearbyStore.length === 1) {
    nearbyStore[0].selected = true
  }

  return updatedFormState
}

export default updateDropdown
