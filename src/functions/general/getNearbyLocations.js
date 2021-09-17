import allLocations from '../../data/allLocations.json'
import siteDataM from '../../data/siteDataM.json'

function getNearbyLocations() {
  // Get nearby locations
  const nearbyLocations = allLocations.locations.find(elem => (
    elem.state === siteDataM.state
  )).stores.find(item => (
    item.city === siteDataM.city
  )).locations

  return nearbyLocations
}

export default getNearbyLocations
