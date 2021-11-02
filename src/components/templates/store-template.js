import React from 'react'
import Layout, {siteData} from './Layout'
import StoreLayout from './store-layout/StoreLayout'
import '../locations/styles.css'

function StoreTemplate({location}) {
  const store = siteData.locations.find(store => `/locations/${siteData.pathname}/${store.pathname}/` === location.pathname)
  return (
    <Layout>
      <StoreLayout siteData={siteData} store={store} />
    </Layout>
  )
}

export default StoreTemplate
