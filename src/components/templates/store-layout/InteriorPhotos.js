import React from 'react'

function InteriorPhotos({store, imgPath, defaultImages}) {
  return (
    <div className="w-100 d-flex justify-content-center flex-wrap mb-n3">
      <div className="col-sm-6 col-lg-3 p-1">
        <img 
          src={ store.proPhotos ? `${imgPath}FrontDesk.jpg` : defaultImages.frontdesk } 
          alt={`Milan Laser ${store.location} Front Desk`} className="img-fluid" />
      </div>
      <div className="col-sm-6 col-lg-3 p-1">
        <img 
          src={ store.proPhotos ? `${imgPath}Lobby.jpg` : defaultImages.lobby } 
          alt={`Milan Laser ${store.location} Lobby`}className="img-fluid"  />
      </div>
      <div className="col-sm-6 col-lg-3 p-1">
        <img 
          src={ store.proPhotos ? `${imgPath}ConsultationRoom.jpg` : defaultImages.consultroom }
          alt={`Milan Laser ${store.location} Consultation Room`} className="img-fluid" />
      </div>
      <div className="col-sm-6 col-lg-3 p-1">
        <img
          src={ store.proPhotos ? `${imgPath}TXRoom.jpg` : defaultImages.txroom } 
          alt={`Milan Laser ${store.location} Treatment Room`} className="img-fluid" />
      </div>
    </div>
  )
}

export default InteriorPhotos
