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
    let isOpen = city.locations.find(elem => {
      return elem.open === true
    })
    if(isOpen) siteData.open = true
    else siteData.open = false
  }

  // For cities with single location & open
  else if(city.locations.length === 1) {
    siteData.multiple = false
    if(city.locations[0].open) siteData.open = true
    else siteData.open = false
  }
}

export default isMultiple
