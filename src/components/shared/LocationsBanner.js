import React from 'react'
import openStoresDisplayed from '../../functions/general/openStoresDisplayed'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { milan_img_path } from '../../constants/constants'

function LocationsBanner() {
  const openStoresNum = openStoresDisplayed()
  return (
    <section className="w-100 py-4 locations-banner">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
      {({ isVisible }) => (
        <div className="container text-center">
          <a href="https://milanlaser.com/locations/" target="_blank" rel="noreferrer">
            <h2 className="text-center text-white subhead-sm text-capitalize">
              {isVisible ? <CountUp className="text-white" end={openStoresNum} duration={2} /> : null}+ Milan Laser Locations
            </h2>
            <img src={`${milan_img_path}shared/other/locations-pin-btn.png`} alt="" />
          </a>
        </div>
      )}
      </VisibilitySensor>
    </section>
  )
}

export default LocationsBanner
