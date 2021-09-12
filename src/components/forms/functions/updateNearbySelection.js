import getNearbyLocations from '../../../data/getNearbyLocations'
import scrollTo from 'gatsby-plugin-smoothscroll'

function updateNearbySelection(store, formState) {
  const updatedFormState = { ...formState }
  updatedFormState.store.salesforceValue = store.salesforceValue
  updatedFormState.store.zipcode = store.zipcode
  updatedFormState.store.address = store.address
  updatedFormState.store.location = store.location
  updatedFormState.store.locationOnAddress = store.locationOnAddress
  updatedFormState.store.stateShort = store.stateShort
  updatedFormState.store.virtual = store.virtual
  updatedFormState.store.open = store.open
  updatedFormState.store.virtualZip = store.virtualZip

  if(!store.virtual) updatedFormState.include.consultType = 'Consult'
  if(store.virtual) updatedFormState.include.consultType = ''

  getNearbyLocations().map(store => store.selected = false)
  store.selected = true

  scrollTo('#locations-dropdown')

  return updatedFormState
}

export default updateNearbySelection
