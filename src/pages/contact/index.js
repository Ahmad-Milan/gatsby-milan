import React from 'react'
import Layout, {siteData, city} from '../../components/layout/Layout'
import Contact from '../../components/forms/consult/Contact'

import './contact.css'

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
                <h5 className="ribbon">Call Us <a href="tel:833-667-2967" className="text-white stretched-link">1-833-NO-RAZOR</a></h5>
                {/* <a name="askQ" id="askQ" ></a> */}
                <h5 className="mt-4 mb-3">To Re-schedule a Treatment <a href="tel:518-223-9045" className="main-blue d-block d-sm-inline">518-223-9045</a></h5>
                <h5>Or Send Us a Question</h5>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
      <span id="facebook"> Facebook hash</span>
    </Layout>

  )
}

export default index
