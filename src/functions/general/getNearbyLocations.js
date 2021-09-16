import allLocations from '../../data/allLocations.json'
import siteData from '../../data/siteData.json'

function getNearbyLocations() {
  // Get nearby locations
  const nearbyLocations = allLocations.locations.find(elem => (
    elem.state === siteData.state
  )).stores.find(item => (
    item.city === siteData.city
  )).locations

  return nearbyLocations
}

export default getNearbyLocations
