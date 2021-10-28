import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { milan_img_path } from '../../../constants/constants'

function ReviewUsBtn({city, link, platform, bgColor}) {
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
        <Dropdown id="google-reviews">
          <Dropdown.Toggle style={{backgroundColor: bgColor }}>
            <img src={`${milan_img_path}shared/other/reviews-${platform}.png`} width="180" height="60" alt={`milan laser ${platform} reviews`} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {
              city.locations.map((location, x) => (
                <Dropdown.Item key={x} 
                  href={`${location.reviews[platform] !== '' ? link : ''}${location.reviews[platform]}`}>
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
