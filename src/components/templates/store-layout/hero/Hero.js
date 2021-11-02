import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import HeroDetails from './HeroDetails'

function Hero({siteData, store, imgPath}) {
  const breakpoints = useBreakpoint()
  
  return (
    <section 
      className="background hero store-hero-pro lh-base"
      style={{backgroundImage: breakpoints.xl ? `url(${imgPath}Hero.jpg)` : `url(${imgPath}HeroXL.jpg)`}}>
      <div 
        className="w-100 d-sm-none hero-sm"
        style={{backgroundImage: breakpoints.xs ? `url(${imgPath}Thumbnail.jpg)` : 'none'}}></div>
      <div className="container">
        <div className={`row ${store.heroReversed ? 'flex-row-reverse' : ''}`}>
          <div className="col-sm-8 col-md-6 col-lg-5 bg-blue-sm">
            <HeroDetails siteData={siteData} store={store} />
          </div>
          <div className="col-sm-4 col-md-6"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
