import React from 'react'
import { Link } from 'gatsby'
import { HOME_PAGE_COPY } from '../../utils/constants/constants'
import { StaticImage } from "gatsby-plugin-image"
import { FaBell } from 'react-icons/fa'
import TopBadge from './TopBadge'
import './styles.css'


function HomeHero({siteData}) {

  return (
    <section id="home-hero" className="background position-relative hero overflow-hidden w-100 h-auto">
      <div className="container position-relative overflow-hidden">
        <div className="specials-banner w-100 position-absolute overflow-hidden">
          <Link to="/specials/" className="text-white d-inline-block">
            <span className="bell shadow-sm d-none d-sm-inline-block"><FaBell /></span>
            <span className="bar shadow-sm">
              {
                !siteData.open ? <strong>Coming Soon!</strong>
                : !siteData.grandOpening ? <strong>{HOME_PAGE_COPY.default}</strong>
                : <><strong>{HOME_PAGE_COPY.grandOpening[0]}</strong> {HOME_PAGE_COPY.grandOpening[1]}</>
              }
            </span>
          </Link>
        </div>
        <TopBadge siteData={siteData} />
        
        <div className="col-lg-10 px-0 px-lg-4 pb-md-5 m-auto">
          <div id="logo" className="mb-3 mb-sm-5 text-center mx-auto" style={{maxHeight: '100px'}}>
            <StaticImage 
              src="https://milanlaser.com/gatsby/images/shared/other/Milan-Logo-Blue.png"
              objectFit="contain"
              alt="Milan Laser Hair Removal Logo"/>
          </div>
          
          <div className="row flex-column mx-0 pb-sm-5 text-center">
            <div className="slogan mb-5 pb-4">
              <span>NEVER SHAVE AGAIN. GUARANTEED.</span>
            </div>
          </div>

          <div className="row mx-0 mt-5">
            <div className="address mt-5 w-100">
              <div className="transparent-bg rounded text-center py-2">
                <Link className="main-blue" to={`/locations/${siteData.pathname}/`} >
                 {
                 !siteData.multiple ?
                 <>{siteData.locations[0].address}, {siteData.locations[0].locationOnAddress === 'same' ? siteData.locations[0].location : siteData.locations[0].locationOnAddress}, {siteData.locations[0].stateShort} {siteData.locations[0].zipcode}</>
                 :
                 <>{siteData.locations.length} convenient {siteData.cityName} locations!</>
                 }
                </Link>
              </div>
            </div>
          </div>
          
          <div className="row mx-0 mb-2 mt-3">
            <div className="hero-cards d-flex justify-content-start justify-content-sm-center justify-content-md-between flex-wrap">
              <Link to="#works" className="card text-center mb-2 shadow smooth">
                <div className="card-body p-0">
                  <div className="cta-top py-1 px-2 px-lg-3">
                    <span>See How</span><div className="card-text mb-1 mb-sm-0">Laser Hair Removal Works</div>
                  </div>
                  <div className="cta-footer py-1 py-sm-2 px-2 px-lg-3 text-white">
                    the process &middot; before &amp; after &middot; body areas
                  </div>
                </div>
              </Link>
              
              <Link to="/specials/#guarantee" className="card text-center mb-2 shadow">
                <div className="card-body p-0">
                  <div className="cta-top py-1 px-2 px-lg-3">
                    <span>As Many Treatments As You Need For</span>
                    <div className="card-text mb-1 mb-sm-0">One Low Price. Period.</div>
                  </div>
                  
                  <div className="cta-footer py-1 py-sm-2 px-2 px-lg-3 text-white">
                    Learn more about the <strong> Unlimited Package<sup>TM</sup></strong>
                  </div>
                </div>
              </Link> 
            </div>
          </div>
          
          <div className="row justify-content-center d-none d-md-block mx-0">
            <div className="text-center m-auto">
              <p className="mb-0 p-3 rounded transparent-bg">Laser hair removal is a <strong>permanent solution to unwanted hair<sup>&dagger;</sup></strong>. We can remove hair from nearly any part of the body for<strong> less than the cost of a monthly wax</strong>. Treatments are fast and there’s no recovery time (it can be done over lunch!).</p>
            </div>
          </div>
          <span id="works"></span>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

