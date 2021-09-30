import React from 'react'
import Layout, {siteData, city} from '../../components/layout/Layout'
import Contact from '../../components/forms/contact/Contact'
import getNearbyLocations from '../../functions/general/getNearbyLocations'
import { MILAN_PHONE, NO_RAZOR } from '../../functions/general/getSiteData'

import './contact.css'

const nearbyLocations = getNearbyLocations(siteData)

function index() {
  return (
    <Layout>
      <section className="full-section background hero contact-hero">
        <div className="container">
          <h1 className="text-center mb-4">Contact Us</h1>
          <div className="row">
            <div className="col-md-4 col-lg-6"></div>
            <div className="col-11 col-md-8 col-lg-6 text-all-bg shadow-sm rounded mx-auto">
              <div className="text-center">
                <h2 className="mt-3 pb-3">Milan Laser | {siteData.city}, {siteData.stateShort}</h2>
                <h5 className="ribbon">Call Us <a href={`tel:${MILAN_PHONE}`} className="text-white stretched-link">{NO_RAZOR}</a></h5>
                {/* <a name="askQ" id="askQ" ></a> */}
                <h5 className="mt-4 mb-2">To Re-schedule a Treatment
                {
                  nearbyLocations.length === 1 && 
                  <span>:&nbsp;
                    <a href={`tel:${nearbyLocations[0].phone !== '' ? nearbyLocations[0].phone : MILAN_PHONE}`} className="main-blue d-block d-md-inline">
                    {`${nearbyLocations[0].phone !== '' ? nearbyLocations[0].phone : MILAN_PHONE}`}
                    </a>
                  </span>
                }
                </h5>
                {
                  nearbyLocations.length > 1 &&
                  <ul className="row text-lg-start">
                    {
                      nearbyLocations.map((store, x) => (
                      <li key={x} className="col-lg-6 text-center">
                        <span className="h6">{store.location}:&nbsp;
                          <a href={`tel:${store.phone !== '' ? store.phone : MILAN_PHONE}`} className="main-blue">
                          {`${store.phone !== '' ? store.phone : MILAN_PHONE}`}
                          </a>
                        </span>
                      </li>
                      ))
                    }
                  </ul>
                }
              </div>

              <h5 className="text-center mt-3">Or Send Us a Question</h5>
              <Contact siteData={siteData} city={city} />
            </div>
          </div>
        </div>
      </section>
      <span id="facebook"> Facebook hash</span>
    </Layout>

  )
}

export default index
