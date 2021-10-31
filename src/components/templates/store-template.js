import React from 'react'
import Layout, {siteData, city} from './Layout'
import StoreLayout from './store-layout/StoreLayout'
import '../locations/styles.css'

function StoreTemplate({location}) {
  const store = city.locations.find(store => `/locations/${city.pathname}/${store.pathname}/` === location.pathname)
  return (
    <Layout>
      <StoreLayout siteData={siteData} city={city} store={store} />
    </Layout>
  )
}

export default StoreTemplate
