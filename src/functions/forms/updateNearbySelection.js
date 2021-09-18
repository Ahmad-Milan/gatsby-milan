import getNearbyLocations from '../../functions/general/getNearbyLocations'
import scrollTo from 'gatsby-plugin-smoothscroll'
import updateStoreProps from './updateStoreProps'

function updateNearbySelection(store, formState) {
  const updatedFormState = { ...formState } // Shallow clone of formState
  // Update the values of formState.store porps
  updateStoreProps(updatedFormState, store)

  // if action is self_schedule AND
  // store does NOT support Virtual Consult -> Set consultType to 'Consult'
  if(!store.virtual && formState.include.action === 'self_schedule') updatedFormState.include.consultType = 'Consult'

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
