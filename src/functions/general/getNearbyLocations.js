import stores from '../../data/stores.json'
import siteDataM from '../../data/siteDataM.json'

function getNearbyLocations() {
  // Get nearby locations
  const nearbyLocations = stores.locations.find(elem => (
    elem.state === siteDataM.state
  )).stores.find(item => (
    item.city === siteDataM.city
  )).locations

  return nearbyLocations
}

export default getNearbyLocations
