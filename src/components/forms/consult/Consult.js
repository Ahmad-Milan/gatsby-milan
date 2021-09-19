import React from "react"
import stores from '../../../data/stores.json'
import VirtualMultiple from './VirtualMultiple'
import Single from "./Single"
import NotOpen from "./NotOpen"

function Consult({siteData}) {
  let city
  city = stores.locations.find(element => {
    return element.stores.some(findLocation)
  }).stores.find(findLocation)

  function findLocation(elem) {
    return elem.city === siteData.city
  }
  
  // For cities with multiple locations
  if(city.locations.length > 1) {
    // if any store is Open 
    let isOpen = city.locations.find(elem => {
      return elem.open === true
    })
    if(isOpen) return <VirtualMultiple siteData={siteData} />
  }
  // For cities with single location
  else if(city.locations.length === 1 && city.locations[0].open) {
    return <Single siteData={siteData} />
  }

  return <NotOpen siteData={siteData} />
}
export default Consult
