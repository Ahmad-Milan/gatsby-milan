import stores from '../../data/stores.json'

const getStore = (event) => {
  let filteredStore
  filteredStore = stores.locations.find(element => {
    return element.stores.some(findLocation)
  }).stores.find(findLocation)

  function findLocation(elem) {
    return elem.locations.some(elem => elem.salesforceValue === event.target.value)
  }

  filteredStore = filteredStore.locations.find(location => location.salesforceValue === event.target.value)
  return filteredStore
}

export default getStore