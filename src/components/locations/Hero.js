import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './styles.css'

function Hero({city, store}) {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          MILAN_PHONE,
          NO_RAZOR
        }
      }
    }
  `)
  const { MILAN_PHONE, NO_RAZOR } = data.site.siteMetadata

  return (
    <section className="hero about-us-hero">
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="wrapper col-lg-10 col-xl-9 p-0 d-flex flex-column flex-md-row-reverse">
            
            <div className="col-md-6 loc-exterior"></div>
            
            <div className="col-md-6 p-0">
              <div className="shadow bg-blue py-4 px-sm-4 text-center text-white">
                <div className="my-4 d-none d-md-block">
                  <img style={{maxWidth: '160px'}} src="https://milanlaser.com/CommonAssets/Milan_Reverse.svg" alt="Milan Laser Hair Removal Logo"/>
                </div>
                <h1 className="h4 pt-2 pt-sm-0 mb-2">{city.city}</h1>
                <h2 className="h2">({store.location}, {store.stateShort})</h2>
                <p className="my-4">{store.address}<br /> 
                  {store.locationOnAddress === 'same' ? store.location : store.locationOnAddress}, {store.stateShort} {store.zipcode}
                </p>
                <p className="mb-4"><i className="fa fa-fw fa-phone"></i>&nbsp; 
                  <a href={`tel:${store.phone === '' ? MILAN_PHONE : store.phone}`} className="text-white">
                    {store.phone === '' ? NO_RAZOR : store.phone}
                  </a>
                </p>

                <h5 className="mb-0">Hours of Operation</h5>
                <p className="mb-4">Monday-Thursday: 10 AM - 7 PM<br />
                  Friday: 9AM - 5PM <br />
                  Saturday: 10 AM - 3 PM <br /> (Subject to Change)</p>

                <div className="pt-4">
                  <div className="mb-3"><a className="map-btn shadow text-white" rel="noreferrer" href={store.googleMap} target="_blank">Get Directions In Google Maps</a></div>
                  <div className="mb-3"><a className="map-btn shadow text-white" rel="noreferrer" href={store.appleMap} target="_blank">Get Directions In Apple Maps</a></div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
