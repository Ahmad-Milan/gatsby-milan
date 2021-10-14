import React, {useState, useEffect} from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import imageExists from '../../../functions/general/imageExists'
import '../styles.css'


function TempHero({siteData, city, store, defaultImages}) {
  const breakpoints = useBreakpoint()

  const imgPath = `https://milanlaser.com/gatsby/images/${siteData.stateShort.toLowerCase()}/${city.pathname}/${store.pathname}/`

  const [exteriorTemp, setExteriorTemp] = useState(defaultImages.exterior)

  useEffect(() => {
    imageExists(`${imgPath}ExteriorTemp.jpg`)
      .then(res => {
        if(res.status === 'ok') setExteriorTemp(res.path)
        else console.error(res.status)
      }).catch(err => console.error(err))
  }, [])

  console.log('rendered')
  return (
    <section className="hero about-us-hero">
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="wrapper col-lg-10 col-xl-9 p-0 d-flex flex-column flex-md-row-reverse">
             
            <div 
              className="col-md-6 loc-exterior"
              style={{backgroundImage: breakpoints.md ? `url(${defaultImages.thumbnail})` : `url(${exteriorTemp})`}}></div>
            
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
                  <a href={`tel:${store.phone === '' ? '833-667-2967' : store.phone}`} className="text-white">
                    {store.phone === '' ? '833-667-2967' : store.phone}
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

export default TempHero
