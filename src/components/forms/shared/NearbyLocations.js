import React from 'react'
import getNearbyLocations from '../../../functions/general/getNearbyLocations'
import { siteData } from '../../templates/Layout'

function NearbyLocations({nearbySelectedHandler}) {
  return (
    <>
    {
      getNearbyLocations(siteData).map((store, x) => (
        <li key={x} className="mb-2 col-6 col-md-4 col-lg-3">
          <div
            className={`card p-2 text-center ${store.selected === true ? 'selected' : 'shadow-sm'}`} 
            onClick={() => nearbySelectedHandler(store)}>{store.location}
          </div>
        </li>
      ))
    }
    </>
  )
}

export default NearbyLocations
