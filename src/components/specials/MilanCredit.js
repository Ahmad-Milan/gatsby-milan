import React from 'react'
import { Link } from 'gatsby'
import { MILAN_IMG_PATH } from '../../utils/constants/constants'

function MilanCredit({setShowSignUpModal}) {
  return (
    <section className="full-section background light-blue-bg">
      <div className="container">
        <h2 className="mb-3 text-center subhead-sm">The cost of laser hair removal won’t break the bank!</h2>
        <div className="row mt-4">
          <div className="col-lg-6 text-center">
            <img src={`${MILAN_IMG_PATH}shared/other/milan_credit_460x336.png`} alt="Milan Credit" style={{width: '90%', maxWidth: '460px'}} />
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="anchor-blue text-center text-lg-start">
              <p>At Milan, we believe everyone deserves to get smooth, hair-free skin at a price they can afford. That’s why we offer everyone affordable payment plans!</p>
              <p>With Milan Credit*</p>
              <ul className="text-start ps-4 ms-sm-1 ul-disc-outside lh-lg">
                <li><strong>100%</strong> Credit Approval.</li>
                <li><strong>0%</strong> APR Payment Options.</li>
                <li>Payments as low as <strong>$29</strong>/month.</li>
                <li><a href="https://www.milanlaser.com/finance/" target="_blank" rel="noreferrer">Pre-Qualify without affecting your credit score</a></li>
              </ul>
              <div className="text-center mb-3">
                <Link className="cta-btn red-bg-btn py-2 px-4 text-white shadow-sm text-uppercase" to="/specials/estimate/">Get a Custom Quote</Link>
              </div>
              <p className="mb-0">Don’t forget to check out our specials page or <span className="main-blue pointer" onClick={() => setShowSignUpModal(true)}>sign up for our newsletter</span> for amazing deals!</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center flex-column flex-md-row mt-3 mt-lg-5">
          <div><Link className="milan-btn navy-bg-btn text-uppercase mb-3" to="/process/beforeafter/">Before &amp; After</Link></div>
          <div><Link className="milan-btn navy-bg-btn text-uppercase mb-3" to="/process/">OUR TECHNOLOGY</Link></div>
          <div><Link className="milan-btn navy-bg-btn text-uppercase mb-3" to="/process/compare/">Hair Removal Techniques</Link></div>
        </div>
      </div>
    </section>
  )
}

export default MilanCredit
