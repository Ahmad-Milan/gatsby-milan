import React from 'react'
import { MILAN_IMG_PATH } from '../../../utils/constants/constants'

function StaffPhotos({store}) {
  const staffPath = `${MILAN_IMG_PATH}shared/staff/`

  return (
    <div className="container mb-3">
      <h2 className="text-center subhead-sm mb-4">Our {store.location} Staff</h2>
      
      <div className="row justify-content-center">
        <div className="row col-xl-11 justify-content-center">
          {
            store.staff.map((member, x) => {
              const memberArr = member.split("-") // returns ["firstname", "lastname", "role"]
              // memberArr length can be > 3
              let role
              switch (memberArr[memberArr.length - 1]) {
                case 'MD': role = 'Medical Director' 
                  break
                case 'CM': role = 'Clinic Manager'
                  break
                case 'ACM': role = 'Assistant Clinic Manager'
                  break
                case 'RN': role = 'Registered Nurse'
                  break
                case 'CS': role = 'Client Specialist'
                  break
                case 'LPN': role = 'Licensed Practical Nurse'
                  break
                case 'NP': role = 'Nurse Practitioner'
                  break
                default: role = memberArr[2]
              }
              return (
                <div key={x} className="col-10 col-sm-6 col-md-4 col-lg-3">
                  <div className="img-thumbnail shadow-sm mb-3">
                    <img src={`${staffPath}${member}.jpg`} className="w-100" alt="" />
                    <div className="text-center py-2">
                      <div>
                        <strong>
                          {
                            role === 'Medical Director' ? `Dr. ${memberArr[1]}` 
                            : `${memberArr[0]} ${memberArr[1][0]+'.' } ${memberArr.length > 3 ? memberArr[2][0]+'.' : ''}`
                          }
                        </strong>
                      </div>
                      <div>{role}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default StaffPhotos
