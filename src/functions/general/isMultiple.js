import getCity from '../../functions/general/getCity'

// This function is called in getSiteData() in Layout Comp
// 1. Check whether the current city is a single location city or multiple
// 2. Check if any store is open
// 3. Update multiple & open props in siteData obj accordingly
function isMultiple(siteData) {
  // Get the current site city whether it's single or multiple
  const city = getCity(siteData) // returns object

  // For cities with multiple locations & at least ONE location is open
  if(city.locations.length > 1) {
    siteData.multiple = true
    // if ANY store is Open 
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
