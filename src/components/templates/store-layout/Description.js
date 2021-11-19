import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import imageExists from '../../../utils/helpers/general/imageExists'
import { MILAN_PHONE } from '../../../utils/constants/constants'

function Description({store, imgPath, defaultImages}) {

  const [thumbnail, setThumbnail] = useState(imgPath+'FrontDoor.jpg')

  useEffect(() => {
    imageExists(`${imgPath}ShoppingCenterSignage.jpg`)
      .then(res => {
        if(res.status === 'ok') setThumbnail(res.path)
        else throw new Error('ShoppingCenterSignage image not found! FrontDoor image will be used instead.')
      }).catch(err => console.error(err))
  }, [imgPath])

  return (
    <div className="container location-description mb-3 mb-lg-5">
      <h2 className="text-center subhead-sm mb-4">Our {store.location} Location</h2>
      <div className="row flex-lg-row-reverse justify-content-center ">
        <div className="col-lg-5 text-center mb-3 mb-lg-0">
        <img src={ store.proPhotos ? thumbnail : defaultImages.thumbnail} alt="" className="img-thumbnail w-100"/>
        </div>
        <div className="col-lg-5">
          <div className="anchor-blue text-center text-lg-start">
            {
              store.open && store.description !== '' ?
              <p>Our {store.location} location is conveniently located {store.description}.</p> :
              <>
              <p>We are thrilled to announce that we will soon be opening a location near you!</p>
              <p>For years, we have been helping our clients get the smooth, hair-free skin that they want at a price that they can afford, and we are excited to be opening a location in the {store.location} area.</p>
              </>
            }
            <p>For more information, call&nbsp;
              <a href={`tel:${store.phone === '' ? MILAN_PHONE : store.phone}`}>
                {store.phone === '' ? MILAN_PHONE : store.phone}
              </a> or&nbsp;
              <Link to="/locations/contact/#askQ">submit your question online</Link>.
            </p>
            {
              store.open && store.phone !== '' &&
              <p className="mt-4">
                <a href={`tel:${store.phone}`} 
                  className="cta-btn light-btn text-white py-2 px-2 px-sm-4 shadow-sm text-uppercase text-center d-block d-sm-inline">
                    Call Our {store.location} Location
                </a>
              </p>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
