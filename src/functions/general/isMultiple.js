import stores from '../../data/stores.json'
function isMultiple(siteData) {
  let city
  city = stores.locations.find(element => {
    return element.stores.some(findLocation)
  }).stores.find(findLocation)

  function findLocation(elem) {
    return elem.city === siteData.city
  }

  // For cities with multiple locations & at least one location is open
  if(city.locations.length > 1) {
    siteData.multiple = true
    // if any store is Open 
    let isOpen = city.locations.find(elem => elem.open === true)
    isOpen ? siteData.open = true : siteData.open = false
  }

  // For cities with single location & open
  else if(city.locations.length === 1) {
    siteData.multiple = false
    city.locations[0].open ? siteData.open = true : siteData.open = false
  }
}

export default isMultiple
