import React from 'react'
import TempHero from './hero/TempHero'
import Hero from './hero/Hero'
import Reviews from './Reviews'
import Nearby from './Nearby'
import LocationsBanner from '../../shared/LocationsBanner'
import Description from './Description'
import InteriorPhotos from './InteriorPhotos'
import StaffPhotos from './StaffPhotos'
import { MILAN_IMG_PATH } from '../../../constants/constants'
import Doctors from './Doctors'

const sharedPath = `${MILAN_IMG_PATH}shared/store_temp/`

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

function StoreLayout({siteData, store}) {

  const imgPath = `${MILAN_IMG_PATH}${siteData.stateShort.toLowerCase()}/${siteData.pathname}/${store.pathname}/${store.location.trim().replace(/\s/g, '')}_`

  const passedProps = {
    siteData: siteData,
    store: store,
    defaultImages: defaultImages,
    imgPath: imgPath
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
      { store.staff.length !== 0 && <StaffPhotos store={store} /> }
      <InteriorPhotos {...passedProps} />
    </section>

    {
      store.place_id !== '' && <Reviews store={store} />
    }
    <span id="about-us"></span>
    <Doctors />
    </>
  )
}

export default StoreLayout
