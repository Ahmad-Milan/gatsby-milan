import allLocations from '../../../data/allLocations.json'
import getNearbyLocations from '../../../data/getNearbyLocations'

function updateDropdown(event, formState) {
  let filteredStore
  filteredStore = allLocations.locations.filter(element => {
    return element.stores.some(item => {
      if (item.salesforceValue && item.salesforceValue === event.target.value) return true
      else if(item.locations) {
        return item.locations.some(location => location.salesforceValue === event.target.value)
      }
    })
  })[0].stores.filter(item => {
    if (item.salesforceValue && item.salesforceValue === event.target.value) return true
    else if(item.locations) {
      return item.locations.some(location => location.salesforceValue === event.target.value)
    }
  })[0]

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
