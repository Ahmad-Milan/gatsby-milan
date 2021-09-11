import React from 'react'
import allLocations from './allLocations.json'
import siteData from './siteData.json'

function getNearbyLocations() {
  // Get nearby locations
  const nearbyLocations = allLocations.locations.filter(elem => (
    elem.state === siteData.state
  ))[0].stores.filter(item => (
    item.city === siteData.city
  ))[0].locations

  return nearbyLocations
}

export default getNearbyLocations
