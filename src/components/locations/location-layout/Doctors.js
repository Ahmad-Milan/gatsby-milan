import React from 'react'

function Doctors() {
  return (
    <section className="full-section light-blue-bg">
      <div className="container">
        <h2 className="text-center subhead-sm mb-4">About Us</h2>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-lg-6 text-center mb-3">
            <img src="https://milanlaser.com/gatsby/images/shared/staff/shikhar-abe.jpg" alt="Milan Laser Owners" className="img-thumbnail" />
          </div>

          <div className="col-lg-6">
            <div className="anchor-blue text-center text-lg-start">
                <p>Milan Laser was founded in 2012 by two Board Certified medical doctors. Our goal is to provide state of the art laser treatments in a safe, comfortable environment in every one of 
                  <strong><a href="https://milanlaser.com/locations/" target="_blank"> our <span className="location-number">100</span>+ locations.</a></strong></p>
                <p>Our treatments are safe, and all of our procedures are performed by highly-trained medical professionals. Our lasers are FDA cleared  and are tailored to your specific skin type &amp; hair color.</p>
                <p><strong>Shikhar Saxena M.D.<br />
                  </strong>Board Certified in Internal Medicine,<br /> Owner
                </p>
                <p className="mb-0"><strong>Abe Schumacher M.D.</strong><br />
                  Board Certified in Internal Medicine,<br /> Owner
                </p>
            </div>
          </div>
          
          </div>
      </div>
    </section>
  )
}

export default Doctors
