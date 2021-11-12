import React from 'react'
import MilanDealsSignUp from '../forms/signup/MilanDealsSignUp'

function MilanDealsSection() {
  return (
    <section className="w-100 py-5 navy-bg">
      <div className="container ">
        <div className="row text-white align-items-center">
          <div className="col-lg-6 text-center">
            <h3 className="h4">Get Laser Hair Removal <br /> <span className="h3 fw-bold">Deals in Your Inbox</span></h3>
          </div>
          <div className="col-lg-6">
            <MilanDealsSignUp />
          </div>
          </div>
      </div>
    </section>
  )
}

export default MilanDealsSection
