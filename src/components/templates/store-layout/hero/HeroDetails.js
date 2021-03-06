import React from 'react'
import { MILAN_PHONE } from '../../../../utils/constants/constants'
import { FaPhone } from 'react-icons/fa'

function HeroDetails({siteData, store}) {
  return (
    <div className="shadow bg-blue py-4 px-sm-4 text-center text-white">
      <div className="my-4 d-none d-md-block">
        <img style={{maxWidth: '160px'}} src="https://milanlaser.com/CommonAssets/Milan_Reverse.svg" alt="Milan Laser Hair Removal Logo"/>
      </div>
      <h1 className="h4 pt-2 pt-sm-0 mb-2">{siteData.cityName}</h1>
      <h2 className="h2">({store.location}, {store.stateShort})</h2>
      <p className="my-4">{store.address}<br /> 
        {store.locationOnAddress === 'same' ? store.location : store.locationOnAddress}, {store.stateShort} {store.zipcode}
      </p>
      <p className="mb-4"><FaPhone className="me-2" /> 
        <a href={`tel:${store.phone === '' ? MILAN_PHONE : store.phone}`} className="text-white">
          {store.phone === '' ? MILAN_PHONE : store.phone}
        </a>
      </p>

      {
        store.open ?
        <>
        <h5 className="mb-0">Hours of Operation</h5>
        <p className="mb-4">Monday-Thursday: 10 AM - 7 PM<br />
          Friday: 9AM - 5PM <br />
          Saturday: 10 AM - 3 PM <br /> (Subject to Change)</p>
        </>
        :
        <div className="p-sm-5"></div>
      }

      <div className="pt-4">
        <div className="mb-3"><a className="map-btn shadow text-white" rel="noreferrer" href={store.linkToGoogleMaps} target="_blank">Get Directions In Google Maps</a></div>
        <div className="mb-3"><a className="map-btn shadow text-white" rel="noreferrer" href={store.linkToAppleMaps} target="_blank">Get Directions In Apple Maps</a></div>
      </div>

    </div>
  )
}

export default HeroDetails
