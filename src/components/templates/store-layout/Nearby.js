import React from 'react'
import { Link } from 'gatsby'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MILAN_PHONE, MILAN_IMG_PATH } from '../../../utils/constants/constants'

function Nearby({siteData, store}) {

  const settings = {
    dots: siteData.multiple && siteData.locations.length > 2 ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    appendDots: dots => (
      <div >
        <ul className="m-0"> {dots} </ul>
      </div>
    )
  }

  const nearby = siteData.locations.filter(location => location.pathname !== store.pathname)

  return (
    <section className="full-section nearby-locations-carousel">
        
        <div className="container">
          <h2 className="text-center text-white subhead-sm mb-0">NEARBY LOCATIONS</h2>
          
            <Slider {...settings} className="location-wrapper overflow-hidden">
              {
                nearby.map((location, x) => {
                  let imgPath = `${MILAN_IMG_PATH}${siteData.stateShort.toLowerCase()}/${siteData.pathname}/${location.pathname}/${location.location.trim().replace(/\s/g, '')}_Thumbnail.jpg`
                  if(!location.proPhotos) imgPath = `${MILAN_IMG_PATH}shared/store_temp/coming-soon-cam-sm.jpg`
                  return (
                    <div key={x} className={`d-inline-block ${settings.dots ? 'mt-4' : ''}`}>
                      <Link to={`/locations/${siteData.pathname}/${location.pathname}/`} 
                        className="location text-white d-flex justify-content-center flex-column flex-lg-row">
                        <div className="col-lg-4">
                          <div className="w-100 text-center">
                            <img 
                              alt={`Milan Laser ${location.location}, ${location.stateShort}`} 
                              src={imgPath} className="img-thumbnail mx-auto" />
                          </div>
                        </div>
                        <div className="col-lg-4 text-center">
                          <h3 className="mt-3">{location.location}, {location.stateShort}</h3>
                          <p className="my-4">
                            {location.address}<br />
                            {location.locationOnAddress === 'same' ? location.location : location.locationOnAddress}, {location.stateShort} {location.zipcode}
                          </p>
                          <p className="mb-4">{location.phone === '' ? MILAN_PHONE : location.phone}</p>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </Slider>

        </div>
      
    </section>
  )
}

export default Nearby
