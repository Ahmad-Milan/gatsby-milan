import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FACEBOOK_URL_START } from '../../../utils/constants/constants'

function Facebook({location}) {
  return (
    <>
      <a 
        className="d-block main-blue h5 mb-1 p-2 pl-3 me-sm-2 shadow-sm rounded bg-white" 
        href={`${FACEBOOK_URL_START}${location.platforms.facebook}`} target="_blank" rel="noreferrer">
      <FaFacebookSquare className="me-1 pb-1 fs-3" /> {location.location},&nbsp;{location.stateShort}</a>
    </>
  )
}

export default Facebook
