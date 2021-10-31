import React from 'react'
import Layout, {siteData, city} from './Layout'
import StoreLayout from './store-layout/StoreLayout'
import '../locations/styles.css'
import CityLayout from './city-layout/CityLayout'

function CityTemplate({location}) {

  console.log(city)
  return (
    <Layout>
      { // for websites with a single location
        city.locations.length === 1 ?
        <StoreLayout siteData={siteData} city={city} store={city.locations[0]} />
        :
        <CityLayout city={city} />
      }
      
    </Layout>
  )
}

export default CityTemplate
