import React from 'react'
import { Link } from 'gatsby'
import openStoresDisplayed from '../../utils/helpers/general/openStoresDisplayed'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { MILAN_IMG_PATH } from '../../utils/constants/constants'

function LocationsBanner() {
  const openStoresNum = openStoresDisplayed()
  return (
    <section className="w-100 py-4 locations-banner">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
      {({ isVisible }) => (
        <div className="container text-center">
          <Link to="/locations/">
            <h2 className="text-center text-white subhead-sm text-capitalize">
              {isVisible ? <CountUp className="text-white" end={openStoresNum} duration={2} /> : null}+ Milan Laser Locations
            </h2>
            <img src={`${MILAN_IMG_PATH}shared/other/locations-pin-btn.png`} alt="" />
          </Link>
        </div>
      )}
      </VisibilitySensor>
    </section>
  )
}

export default LocationsBanner
