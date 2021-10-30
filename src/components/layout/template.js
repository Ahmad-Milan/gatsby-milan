import React from 'react'
import Layout, {siteData, city} from './Layout'
import LocationLayout from '../../components/locations/location-layout/LocationLayout'

function Template({location}) {
  const store = city.locations.find(store => `/locations/${city.pathname}/${store.pathname}/` === location.pathname)
  console.log(location)
  return (
    <Layout>
      <LocationLayout siteData={siteData} city={city} store={store} />
    </Layout>
  )
}

export default Template
