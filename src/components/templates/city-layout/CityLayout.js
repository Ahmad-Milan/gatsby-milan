import React from 'react'
import LocationsBanner from '../../shared/LocationsBanner'
import Layout from '../Layout'
import Doctors from '../store-layout/Doctors'
import CityStores from './CityStores'


function CityLayout({siteData}) {
  return (
    <Layout>
      <CityStores siteData={siteData} />
      <LocationsBanner />
      <span id="about-us"></span>
      <Doctors />
    </Layout>
  )
}

export default CityLayout
