import React from "react"
import stores from '../../../data/stores.json'
import Multiple from "./Multiple"
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
    siteData.multiple = true
    // if any store is Open 
    let isOpen = city.locations.find(elem => {
      return elem.open === true
    })
    if(isOpen) return <Multiple siteData={siteData} />
  }
  // For cities with single location
  else if(city.locations.length === 1) {
    siteData.multiple = false
    if(city.locations[0].open) return <Single siteData={siteData} />
  }

  return <NotOpen siteData={siteData} />
}
export default Consult
