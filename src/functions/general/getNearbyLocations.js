import stores from '../../data/stores.json'

function getNearbyLocations(siteData) {
  // Get nearby locations
  const nearbyLocations = stores.find(elem => (
    elem.state === siteData.state
  )).stores.find(item => (
    item.city === siteData.city
  )).locations

  return nearbyLocations
}

export default getNearbyLocations
