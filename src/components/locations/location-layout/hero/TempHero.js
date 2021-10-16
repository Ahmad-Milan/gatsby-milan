import React, {useState, useEffect} from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import imageExists from '../../../../functions/general/imageExists'
import HeroDetails from './HeroDetails'

function TempHero({siteData, city, store, defaultImages}) {
  const breakpoints = useBreakpoint()

  const imgPath = `https://milanlaser.com/gatsby/images/${siteData.stateShort.toLowerCase()}/${city.pathname}/${store.pathname}/`

  const [exteriorTemp, setExteriorTemp] = useState(defaultImages.exterior)

  useEffect(() => {
    imageExists(`${imgPath}ExteriorTemp.jpg`)
      .then(res => {
        if(res.status === 'ok') setExteriorTemp(res.path)
        else throw 'Exterior image not found :('
      }).catch(err => console.error(err))
  }, [])

  return (
    <section className="hero store-hero lh-base">
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="wrapper col-lg-10 col-xl-9 p-0 d-flex flex-column flex-md-row-reverse">
             
            <div 
              className="col-md-6 loc-exterior"
              style={{backgroundImage: breakpoints.md ? `url(${defaultImages.thumbnail})` : `url(${exteriorTemp})`}}></div>
            
            <div className="col-md-6 p-0">
              <HeroDetails city={city} store={store} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default TempHero
