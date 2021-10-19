import React from 'react'

function StaffPhotos({store}) {
  const staffPath = 'https://milanlaser.com/about-us/images/'

  return (
    <div className="container mb-3">
      <h2 className="text-center subhead-sm mb-4">Our {store.location} Staff</h2>
      
      <div className="row justify-content-center">
        <div className="row col-xl-11 justify-content-center">
          {
            store.staff.map((member, x) => (
              <div key={x} className="col-10 col-sm-6 col-md-4 col-lg-3">
                <div className="img-thumbnail shadow-sm mb-3">
                  <img src={`${staffPath}${member.img}.jpg`} className="w-100" alt="" />
                  <div className="text-center py-2">
                    <div><strong>{member.name}</strong></div>
                    <div>{member.role}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default StaffPhotos
