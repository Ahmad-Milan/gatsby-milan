import React from 'react'

function LocationsBanner() {
  return (
    <section className="w-100 py-4 locations-banner">
      <div className="container text-center">
        <a href="https://milanlaser.com/locations/" target="_blank" rel="noreferrer">
          <h2 className="text-center text-white subhead-sm text-capitalize">
            <span className="location-number">100</span>+ Milan Laser Locations
          </h2>
          <img src="https://milanlaser.com/images/banner-button.png" alt="" />
        </a>
      </div>
    </section>
  )
}

export default LocationsBanner
