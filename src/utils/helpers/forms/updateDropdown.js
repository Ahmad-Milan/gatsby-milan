import getStore from '../general/getStore'
import updateStoreProps from './updateStoreProps'
import formData from '../../../assets/data/formData.json'

function updateDropdown(salesforceValue, formState, siteData) {

  // This function will find the selected store in the stores file and returns it
  // filteredStore will have 2 props: city & store
  const filteredStore = getStore(salesforceValue)
    
  const updatedFormState = { ...formState } // Shallow clone of formState

  // Unclick all nearby locations if any
  siteData.locations.map(store => store.selected = false)

  // When the user selects a location from the dropdown,
  // there's a chance the selected location happens to be a nearby locaiton, so..
  // Check if the selected location is a nearby location
  const nearbyStore = siteData.locations.find(store => (
    store.salesforceValue === filteredStore.store.salesforceValue
  ))

  // if the selected store happens to be a nearby store:
  if(nearbyStore) {
    // This will make that nearby location to appear as clicked
    nearbyStore.selected = true
    // Update the filteredStore.store to have all the props of the nearbyStore
    filteredStore.store = {...nearbyStore}
  }
  // Update the values of >>>>> formState.store <<<<<< porps
  updateStoreProps(updatedFormState, filteredStore.store)

  // Update formState.city
  updatedFormState.city = {...filteredStore.city}
  // Update formData.city as well
  formData.city = {...filteredStore.city}

  return updatedFormState
}

export default updateDropdown
