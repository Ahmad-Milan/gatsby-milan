import stores from '../../data/stores.json'

// To be called in Single.js & NotOpen.js & updateDropDown.js
// Accepts the salesforce value as a param
// Returns the store object of the passed salesforce value (The store NOT the city)
const getStore = (salesforceValue) => {
  let filteredStore = stores.find(element => {
    return element.stores.some(findLocation)
  }).stores.find(findLocation)

  function findLocation(elem) {
    return elem.locations.some(elem => elem.salesforceValue === salesforceValue)
  }

  filteredStore = filteredStore.locations.find(location => location.salesforceValue === salesforceValue)
  return filteredStore
}

export default getStore