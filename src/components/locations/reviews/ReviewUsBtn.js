import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { MILAN_IMG_PATH } from '../../../constants/constants'
import { FaYelp, FaFacebookF, FaGooglePlusG } from 'react-icons/fa'

function ReviewUsBtn({siteData, link, platform}) {
  const bgColor = {
    facebook: '#3E5A97',
    yelp: '#D82B2C',
    google: '#DB4E41'
  }
  return (
    <div className="col-md-4 col-lg-3 text-center pb-3 pt-md-3">
      <span>Review Us!</span>
      {
        !siteData.multiple ?
        <div>
          <a className="d-inline-block" 
            href={`${siteData.locations[0].platforms[platform] !== '' ? link : ''}${siteData.locations[0].platforms[platform]}`}>
            <img src={`${MILAN_IMG_PATH}shared/other/reviews-${platform}.png`} width="180" height="60" alt={`milan laser ${platform} reviews`} />
          </a>
        </div>
        :
        <Dropdown id={`${platform}-reviews`}>
          <Dropdown.Toggle style={{backgroundColor: bgColor[platform] }}>
            <img src={`${MILAN_IMG_PATH}shared/other/reviews-${platform}.png`} width="180" height="60" alt={`milan laser ${platform} reviews`} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="py-0" style={{backgroundColor: bgColor[platform]}}>
            {
              siteData.locations.map((location, x) => (
                <Dropdown.Item className="border-bottom" key={x} target="_blanc" rel="noreferrer"
                  href={`${location.platforms[platform] !== '' ? link : ''}${location.platforms[platform]}`}>
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
