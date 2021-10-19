import React from 'react'
import TempHero from './hero/TempHero'
import Hero from './hero/Hero'
import Reviews from './Reviews'
import Nearby from './Nearby'
import LocationsBanner from '../../shared/LocationsBanner'
import '../styles.css'
import Description from './Description'

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
    store: store,
    defaultImages: defaultImages
  }
  return (
    <>
    {
      store.proPhotos ?  <Hero {...passedProps} /> : <TempHero {...passedProps} />
    }
    {
      siteData.multiple ? <Nearby {...passedProps} /> : <LocationsBanner />
    }
    <section className="full-section pb-2 light-blue-bg">
      <Description {...passedProps} />
    </section>

    {
      store.place_id !== '' && <Reviews store={store} />
    }
    </>
  )
}

export default Layout
