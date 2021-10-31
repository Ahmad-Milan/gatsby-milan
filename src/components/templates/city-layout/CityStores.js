import React from 'react'
import { Link } from 'gatsby'
import { FaPhone } from 'react-icons/fa'
import { MILAN_PHONE } from '../../../constants/constants'

function CityStores({city}) {
  return (
    <section className="full-section background hero lh-base light-blue-bg">
      <div className="container">
        <div className="row text-center">
          <h1 className="pb-4">Our {city.city} Locations</h1>
          <p className="col-md-10 mx-auto">We have {city.locations.length} convenient {city.city} area locations. We are currently open across the street from the Chandler Fashion Center in Chandler, just off of Bell Road in the center with Target, Ross, and HomeGoods, in Peoria, just south of Kierland Commons at Scottsdale and Thunderbird Roads in Scottsdale with a second Scottsdale location opening soon.</p>
        </div>
        <div className="row pt-4 justify-content-center">
        {
          city.locations.map((store, x) => (
            <div key={x} className="col-10 col-sm-6 col-md-4 col-lg-3">
              <Link 
                to={`/locations/${city.pathname}/${store.pathname}/`} 
                className="card p-3 text-center shadow-sm mb-3 navy-bg-btn cta-btn">
                <h2 className="h5 py-3 fw-bold text-white">{store.location}</h2>
                <h3 className="h6 text-white">
                  {store.address}<br /> 
                  {store.locationOnAddress === 'same' ? store.location : store.locationOnAddress}, {store.stateShort} {store.zipcode}
                </h3>
                <p className="my-3 light-blue"><FaPhone className="me-2" />
                  {store.phone === '' ? MILAN_PHONE : store.phone}
                </p>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default CityStores
