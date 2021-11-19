import React from 'react'
import stores from '../../assets/data/stores.json'
import Layout, {siteData} from '../../components/templates/Layout'
import MilanLocations from '../../components/locations/milan-locations/MilanLocations'

function Locations() {
  return (
    <Layout>
      <MilanLocations siteData={siteData} stores={stores} />
    </Layout>
  )
}

export default Locations