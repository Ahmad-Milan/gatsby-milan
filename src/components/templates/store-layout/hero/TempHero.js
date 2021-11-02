import React, {useState, useEffect} from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import imageExists from '../../../../functions/general/imageExists'
import HeroDetails from './HeroDetails'
import { milan_img_path } from '../../../../constants/constants'

function TempHero({siteData, store, defaultImages}) {
  const breakpoints = useBreakpoint()

  const exteriorTempPath = `${milan_img_path}${siteData.stateShort.toLowerCase()}/${siteData.pathname}/${store.pathname}/`

  const [exteriorTemp, setExteriorTemp] = useState(defaultImages.exterior)

  useEffect(() => {
    imageExists(`${exteriorTempPath}ExteriorTemp.jpg`)
      .then(res => {
        if(res.status === 'ok') setExteriorTemp(res.path)
        else throw new Error('Exterior image not found :(')
      }).catch(err => console.error(err))
  }, [exteriorTempPath])

  return (
    <section className="hero store-hero lh-base">
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="wrapper col-lg-10 col-xl-9 p-0 d-flex flex-column flex-md-row-reverse">
             
            <div 
              className="col-md-6 loc-exterior"
              style={{backgroundImage: breakpoints.md ? `url(${defaultImages.thumbnail})` : `url(${exteriorTemp})`}}></div>
            
            <div className="col-md-6 p-0">
              <HeroDetails siteData={siteData} store={store} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default TempHero
