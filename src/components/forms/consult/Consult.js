import React from "react"
import stores from '../../../data/stores.json'
import VirtualMultiple from './VirtualMultiple'
import VirtualSingle from './VirtualSingle'

function Consult({siteData}) {
  let city
  city = stores.locations.find(element => {
    return element.stores.some(findLocation)
  }).stores.find(findLocation)

  function findLocation(elem) {
    return elem.city === siteData.city
  }
  
  // For cities with multiple locations
  if(city.locations.length > 1) return <VirtualMultiple />
  // For cities with single location
  else return <VirtualSingle siteData={siteData} />
}
export default Consult
