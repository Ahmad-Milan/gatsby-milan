import React from 'react'
import TempHero from './TempHero'

function Layout({siteData, city, store}) {
  return (
    <>
      <TempHero siteData={siteData} city={city} store={store} />
    </>
  )
}

export default Layout
