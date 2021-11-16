import getNearbyLocations from '../general/getNearbyLocations'
import getStore from '../general/getStore'
import updateStoreProps from './updateStoreProps'
import formData from '../../data/formData.json'

function updateDropdown(salesforceValue, formState, siteData) {

  // This function will find the selected store in the stores file and return it
  const filteredStore = getStore(salesforceValue)
    
  const updatedFormState = { ...formState } // Shallow clone of formState
  // Update the values of formState.store porps
  updateStoreProps(updatedFormState, filteredStore.store)

  // Unclick all nearby locations if any
  getNearbyLocations(siteData).map(store => store.selected = false)

  // When the user selects a location from the dropdown,
  // there's a chance the selected location happens to be a nearby locaiton, so..
  // Check if the selected location is a nearby location
  const nearbyStore = getNearbyLocations(siteData).find(store => (
    store.salesforceValue === filteredStore.store.salesforceValue
  ))

  // This will make that nearby location to appear as clicked
  if(nearbyStore) nearbyStore.selected = true

  updatedFormState.city = {...filteredStore.city}
  formData.city = {...filteredStore.city}

  return updatedFormState
}

export default updateDropdown
