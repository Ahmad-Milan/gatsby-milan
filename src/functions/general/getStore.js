import stores from '../../data/stores.json'

// To be called in Single.js & NotOpen.js & updateDropDown.js
// Accepts the salesforce value as a param
// Returns the store object of the passed salesforce value (The store NOT the city)
const getStore = (salesforceValue) => {
  let filteredCity = stores.find(element => {
    return element.cities.some(findLocation)
  }).cities.find(findLocation)

  function findLocation(elem) {
    return elem.locations.some(elem => elem.salesforceValue === salesforceValue)
  }
  let filteredStore = filteredCity.locations.find(location => location.salesforceValue === salesforceValue)
  return {
    city: {
      cityName: filteredCity.city,
      pathname: filteredCity.pathname,
    },
    store: filteredStore
  }
}

export default getStore