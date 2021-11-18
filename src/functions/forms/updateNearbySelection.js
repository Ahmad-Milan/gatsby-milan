import scrollTo from 'gatsby-plugin-smoothscroll'
import updateStoreProps from './updateStoreProps'
import formData from '../../data/formData.json'

function updateNearbySelection(store, formState, siteData) {
  const updatedFormState = { ...formState } // Shallow clone of formState
  // Update the values of formState.store porps
  updateStoreProps(updatedFormState, store)

  // Unclick all nearby locations if any
  siteData.locations.map(store => store.selected = false)
  // Then make the clicked one selected
  store.selected = true

  // Update formState and formData city prop
  updatedFormState.city.cityName = siteData.cityName
  updatedFormState.city.pathname = siteData.pathname
  formData.city = {...updatedFormState.city}

  scrollTo('#locations-dropdown')

  return updatedFormState
}

export default updateNearbySelection
