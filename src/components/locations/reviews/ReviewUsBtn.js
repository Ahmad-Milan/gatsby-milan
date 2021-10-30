import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { milan_img_path } from '../../../constants/constants'
import { FaYelp, FaFacebookF, FaGooglePlusG } from 'react-icons/fa'

function ReviewUsBtn({city, link, platform}) {
  const bgColor = {
    facebook: '#3E5A97',
    yelp: '#D82B2C',
    google: '#DB4E41'
  }
  return (
    <div className="col-md-4 col-lg-3 text-center pb-3 pt-md-3">
      <span>Review Us!</span>
      {
        city.locations.length === 1 ?
        <div>
          <a className="d-inline-block" 
            href={`${city.locations[0].reviews[platform] !== '' ? link : ''}${city.locations[0].reviews[platform]}`}>
            <img src={`${milan_img_path}shared/other/reviews-${platform}.png`} width="180" height="60" alt={`milan laser ${platform} reviews`} />
          </a>
        </div>
        :
        <Dropdown id={`${platform}-reviews`}>
          <Dropdown.Toggle style={{backgroundColor: bgColor[platform] }}>
            <img src={`${milan_img_path}shared/other/reviews-${platform}.png`} width="180" height="60" alt={`milan laser ${platform} reviews`} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="py-0" style={{backgroundColor: bgColor[platform]}}>
            {
              city.locations.map((location, x) => (
                <Dropdown.Item className="border-bottom" key={x} target="_blanc" rel="noreferrer"
                  href={`${location.reviews[platform] !== '' ? link : ''}${location.reviews[platform]}`}>
                    {
                      platform === 'google' ?
                      <FaGooglePlusG className="fs-5 me-1" />
                      : platform === 'yelp' ?
                      <FaYelp className="fs-5 me-1" />
                      : platform === 'facebook' ?
                      <FaFacebookF className="fs-5 me-1" />
                      : <></>
                    }
                  { location.location }
                </Dropdown.Item>
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
      }
    </div>
  )
}

export default ReviewUsBtn