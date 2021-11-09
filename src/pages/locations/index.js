import React from 'react'
import stores from '../../data/stores.json'
import Layout, {siteData} from '../../components/templates/Layout'
import MilanLocations from '../../components/locations/milan-locations/MilanLocations'
import './styles.css'

function Locations() {
  return (
    <Layout>
      <MilanLocations siteData={siteData} stores={stores} />
    </Layout>
  )
}

export default Locations