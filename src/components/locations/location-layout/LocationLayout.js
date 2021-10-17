import React from 'react'
import TempHero from './hero/TempHero'
import Hero from './hero/Hero'
import Reviews from './reviews/Reviews'
import '../styles.css'
import Nearby from './nearby-locations/Nearby'
import LocationsBanner from '../../shared/LocationsBanner'

const sharedPath = 'https://milanlaser.com/gatsby/images/shared/'

// To be used if the store doesn't have pro images yet
const defaultImages = {
  exterior: `${sharedPath}coming-soon-cam.jpg`,
  thumbnail: `${sharedPath}coming-soon-cam-sm.jpg`,
  frontdoor: `${sharedPath}FrontDoor.jpg`,
  frontdesk: `${sharedPath}FrontDesk.jpg`,
  lobby: `${sharedPath}Lobby.jpg`,
  txroom: `${sharedPath}TXRoom.jpg`,
  consultroom: `${sharedPath}ConsultationRoom.jpg`,
}

function Layout({siteData, city, store}) {
  const passedProps = {
    siteData: siteData,
    city: city,
    store: store
  }
  return (
    <>
    {
      store.proPhotos ?
      <Hero {...passedProps} />
      :
      <TempHero {...passedProps} defaultImages={defaultImages} />
    }
    {
      store.place_id !== '' && <Reviews store={store} />
    }
    {
      siteData.multiple ?
      <Nearby {...passedProps} /> :
      <LocationsBanner />
    }
    </>
  )
}

export default Layout
