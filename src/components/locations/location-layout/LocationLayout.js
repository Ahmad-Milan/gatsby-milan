import React from 'react'
import TempHero from './TempHero'

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
  console.log('Layout')
  return (
    <>
      <TempHero siteData={siteData} city={city} store={store} defaultImages={defaultImages} />
    </>
  )
}

export default Layout
