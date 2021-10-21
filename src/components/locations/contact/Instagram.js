import React from 'react'
import { InstagramGallery } from "instagram-gallery"

function Instagram() {
  return (
    <InstagramGallery accessToken={process.env.Ahmad_Instagram_Token} count={9}/>
  )
}

export default Instagram
