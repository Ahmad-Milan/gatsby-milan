import React from 'react'
import { Link } from 'gatsby'
import useMonth from '../../hooks/useMonth'
import { MILAN_IMG_PATH } from '../../utils/constants/constants'

function TopBadge({siteData}) {
  const currentMonth = useMonth()
  return (
    <>
    {
      siteData.award_badge ? 
      <div 
        className="top_badge position-absolute d-none d-md-flex" 
        style={{maxWidth: `${siteData.award_badge.length === 1 ? '260px' : '300px'}` }} >
        <div className={`col-${12 / (siteData.award_badge.length + 1)}`}>
          <Link to="/specials/" className="d-block">
            <img 
              alt={`${siteData.cityName} award`} className="w-100" 
              src={`${MILAN_IMG_PATH}shared/home/badges/${currentMonth}_free_session_badge.png`} />
          </Link>
        </div>
      {
        siteData.award_badge.map((badge, x) => (
          <div key={x} className={`col-${12 / (siteData.award_badge.length + 1)}`}>
            <a href={badge.linksTo} className="d-block h-100 py-1" target="_blank" rel="noreferrer">
              <img alt="Award badge" className="w-100 h-100" src={badge.imgPath} />
            </a>
          </div>
        ))
      }
      </div>
      :
      <div 
        className="top_badge position-absolute d-none d-md-flex"  style={{width: '140px'}} >
        <div>
          <Link to="/specials/" className="d-block">
            <img 
              alt={`${siteData.cityName} award`} className="w-100" 
              src={`${MILAN_IMG_PATH}shared/home/badges/${currentMonth}_free_session_badge.png`} />
          </Link>
        </div>
      </div>
    }
    </>
  )
}

export default TopBadge
