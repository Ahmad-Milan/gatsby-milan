import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

function SpecialsHero({siteData}) {
  return (
    <section className="full-section hero specials-hero">
      <div className="container position-relative">
        <h1 className="text-center mb-3">Laser Hair Removal Specials in {siteData.city}, {siteData.stateShort}</h1>
        <h2 className="h5 text-center"><i>Leaf</i> unwanted hair behind with up to 50% OFF.</h2>
        <div className="row justify-content-center mt-4 mt-lg-5">
          <div className="col-lg-6">
            <div className="graphic-wrapper text-center w-100 mb-3 mb-lg-0 position-relative">
              <img id="graphic" src="https://milanlaser.com/images/Rake-in-Savings.gif" alt="Milan Laser Specials" className="img-fluid"/>
            </div>
          </div>
          <div className="col-lg-6 mb-md-4">
            <div className="anchor-blue text-center">

              <p><span className="d-none d-sm-inline">The days are shorter, temperatures are dropping, and as</span><span className="d-sm-none">As</span> our minds turn toward cozy autumn days, it’s the perfect time for you to get the always cuddle-ready, smooth, hair-free skin of your dreams!</p>
              
              <p>This month, get re-<i>leaf</i> from your endless shaving routine and a cornucopia of savings with <strong>30%, 40%, or even 50% OFF unlimited laser hair removal!</strong> Just like the leaves this time of year, you’ll fall in love with never having to shave again. AND, because <a href="#guarantee" className="smooth">our exclusive Unlimited Package™</a> is included with every purchase, you’ll get all of the sessions you need to be hair-free for life at up to 50% OFF!</p>
                        
              <p className="d-none d-md-block"><strong>Feast Your Eyes on Smooth Skin:</strong> Receive a <strong>FREE TREATMENT*</strong>  on your underarms, bikini line, lower legs, face &amp; neck, shoulders, or neckline when you complete a complimentary consultation this month.</p>
              
              <p className="d-md-none"><strong>Feast Your Eyes on Smooth Skin:</strong> Receive a <strong>FREE TREATMENT*</strong> when you complete a complimentary consultation this month.</p>
              
              <p>Hurry into your <Link to="/locations/">local Milan Laser</Link> by <strong>November 30</strong> to get your <i>Rake in the Savings</i> card, then simply scratch the playing area to reveal your bounty of savings!</p>
              
              <div className="text-center mb-3">
                <a className="smooth cta-btn red-bg-btn py-2 px-4 text-white shadow-sm text-uppercase" href="#consult">Book My Free Consult</a>
              </div>
              <p className="consent-msg"><span>Stay up to date with special discounts and sales by subscribing to our email list.</span> No spam, ever. <span className="d-md-none">*Eligible body areas eligible for the “ONE FREE TREATMENT” special are underarms, bikini line, lower legs, face &amp; neck, shoulders, or neckline.</span> <span className="d-none d-md-inline">*Excludes body areas that are currently or have been previously treated.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialsHero
