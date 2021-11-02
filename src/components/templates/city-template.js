import React from 'react'
import Layout, {siteData} from './Layout'
import StoreLayout from './store-layout/StoreLayout'
import '../locations/styles.css'
import CityLayout from './city-layout/CityLayout'

function CityTemplate() {
  return (
    <Layout>
      { // for websites with a single location
        !siteData.multiple ?
        <StoreLayout siteData={siteData} store={siteData.locations[0]} />
        :
        <CityLayout siteData={siteData} />
      }
    </Layout>
  )
}

export default CityTemplate
