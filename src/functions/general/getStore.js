import stores from '../../data/stores.json'

const getStore = (salesforceValue) => {
  let filteredStore
  filteredStore = stores.locations.find(element => {
    return element.stores.some(findLocation)
  }).stores.find(findLocation)

  function findLocation(elem) {
    return elem.locations.some(elem => elem.salesforceValue === salesforceValue)
  }

  filteredStore = filteredStore.locations.find(location => location.salesforceValue === salesforceValue)
  return filteredStore
}

export default getStore