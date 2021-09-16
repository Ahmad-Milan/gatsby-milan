import allLocations from '../../data/allLocations.json'
import getNearbyLocations from '../general/getNearbyLocations'

function updateDropdown(event, formState) {
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
    
  const updatedFormState = { ...formState } // Shallow clone of formState
  // Update the values of formState.store porps
  updatedFormState.store.salesforceValue = filteredStore.salesforceValue
  updatedFormState.store.zipcode = filteredStore.zipcode
  updatedFormState.store.address = filteredStore.address
  updatedFormState.store.location = filteredStore.location
  updatedFormState.store.locationOnAddress = filteredStore.locationOnAddress
  updatedFormState.store.stateShort = filteredStore.stateShort
  updatedFormState.store.virtual = filteredStore.virtual
  updatedFormState.store.open = filteredStore.open
  updatedFormState.store.virtualZip = "010101"

  // if store does NOT support Virtual Consult -> Set consultType to 'Consult'
  if(!filteredStore.virtual) updatedFormState.include.consultType = 'Consult'

  // if store supports Virtual Consult -> Reset consultType and let the user chooses between the 2 types
  if(filteredStore.virtual) updatedFormState.include.consultType = ''

  // Unclick all nearby locations if any
  getNearbyLocations().map(store => store.selected = false)

  // When the user selects a location from the dropdown,
  // there's a chance the selected location happens to be a nearby locaiton, so..
  // Check if the selected location is a nearby location
  const nearbyStore = getNearbyLocations().find(store => (
    store.salesforceValue === filteredStore.salesforceValue
  ))

  // This will make that nearby location to appear as clicked
  if(nearbyStore) nearbyStore.selected = true

  return updatedFormState
}

export default updateDropdown
