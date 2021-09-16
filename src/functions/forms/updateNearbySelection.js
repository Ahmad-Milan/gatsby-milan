import getNearbyLocations from '../../functions/general/getNearbyLocations'
import scrollTo from 'gatsby-plugin-smoothscroll'

function updateNearbySelection(store, formState) {
  const updatedFormState = { ...formState } // Shallow clone of formState
  // Update formState store values
  updatedFormState.store.salesforceValue = store.salesforceValue
  updatedFormState.store.zipcode = store.zipcode
  updatedFormState.store.address = store.address
  updatedFormState.store.location = store.location
  updatedFormState.store.locationOnAddress = store.locationOnAddress
  updatedFormState.store.stateShort = store.stateShort
  updatedFormState.store.virtual = store.virtual
  updatedFormState.store.open = store.open
  updatedFormState.store.virtualZip = store.virtualZip

  // if store does NOT support Virtual Consult -> Set consultType to 'Consult'
  if(!store.virtual) updatedFormState.include.consultType = 'Consult'

  // if store supports Virtual Consult -> Reset consultType and let the user chooses between the 2 types
  if(store.virtual) updatedFormState.include.consultType = ''

  // Unclick all nearby locations if any
  getNearbyLocations().map(store => store.selected = false)
  // Then make the clicked one selected
  store.selected = true

  scrollTo('#locations-dropdown')

  return updatedFormState
}

export default updateNearbySelection
