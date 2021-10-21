import React from 'react'
import Twitter from './Twitter'
import Facebook from './Facebook'
import Instagram from './Instagram'
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

function SocialMedia({city}) {
  return (
    <section className="full-section background light-blue-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="fb_tw">
              <div id="fb">
                <h3 className="social_h3" style={{backgroundColor: '#3E5A97'}}>
                  <FaFacebookSquare className="me-1 pb-1 fs-2" /> Like Us on Facebook
                </h3>
                
                  {
                    city.locations.length === 1 ?
                    <div className="text-decoration-none bg-white p-3 mb-3 rounded shadow-sm">
                      <a className="d-block main-blue h5 mb-0" 
                        href={`https://www.facebook.com/MilanLaser${city.locations[0].facebook}`} target="_blank" rel="noreferrer">
                      <FaFacebookSquare className="me-1 pb-1 fs-3" /> {city.locations[0].location}, {city.locations[0].stateShort}</a>
                    </div>
                    :
                    <div className="text-decoration-none mb-2 d-flex flex-wrap">
                      {
                        city.locations.map((location, x) =>(
                          <div key={x} className="mb-lg-2 col-12 col-lg-6 px-0">
                            <Facebook location={location} />
                          </div>
                        ))
                      }
                    </div>
                  }
                
              </div>

              <div id="twitter">
                <a href="https://twitter.com/MilanLaser" rel="noreferrer" target="_blank">
                  <h3 className="social_h3" style={{backgroundColor: '#38A1F3'}}>
                    <FaTwitter className="me-1 pb-1 fs-2" /> Follow Us on Twitter
                  </h3>
                </a>
                <Twitter />
              </div> 
            </div>
          </div>
          <div className="col-md-6">
            <div id="instagram">
              <a href="https://www.instagram.com/milanlaser/" rel="noreferrer" target="_blank">
                <h3 className="social_h3" style={{backgroundImage: 'linear-gradient(to top right, #fccc63, #bc2a8d, #8a3ab9)'}}>
                  <FaInstagram className="me-1 pb-1 fs-2" /> See Us on Instagram
                </h3>
              </a>
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia
