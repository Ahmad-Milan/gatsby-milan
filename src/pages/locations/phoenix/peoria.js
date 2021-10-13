import React from 'react'
import Layout, {siteData, city} from '../../../components/layout/Layout'
import LocationLayout from '../../../components/locations/location-layout/LocationLayout'

function Store({location}) {

  const store = city.locations.find(store => `/locations/${city.pathname}/${store.pathname}/` === location.pathname)

  return (
    <Layout>
      <LocationLayout siteData={siteData} city={city} store={store} />
      
    </Layout>
  )
}

export default Store