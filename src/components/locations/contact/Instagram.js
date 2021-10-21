import React from 'react'
import { InstagramGallery } from './getInstagram'

function Instagram() {
  return (
    <InstagramGallery 
      accessToken={process.env.Ahmad_Instagram_Token}
      count={9}
      profile="Milanlaser" pagination="true" />
  )
}

export default Instagram
