import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import HeroDetails from './HeroDetails'
import '../styles.css'


function Hero({siteData, city, store}) {
  const breakpoints = useBreakpoint()

  const imgPath = `https://milanlaser.com/gatsby/images/${siteData.stateShort.toLowerCase()}/${city.pathname}/${store.pathname}/${store.location.trim().replace(/\s/g, '')}_`
  
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
            <HeroDetails city={city} store={store} />
          </div>
          <div className="col-sm-4 col-md-6"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
