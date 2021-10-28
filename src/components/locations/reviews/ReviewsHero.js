import React from 'react'
import { google_reviews_start, yelp_start, facebook_start } from '../../../constants/constants'
import ReviewsBox from './ReviewsBox'
import ReviewUsBtn from './ReviewUsBtn'

function ReviewsHero({city}) {
  return (
    <section id="reviews-section" className="full-section background hero light-blue-bg">
      <div className="container">
        <div className="row justify-content-center text-center px-3">
          <div className="col-md-10">
            <h1>{city.city} Laser Hair Removal Reviews</h1>
            <p className="mt-3">Our clients love their permanent results from their laser hair removal at Milan. Even clients who received unsuccessful laser hair removal treatments somewhere else see amazing, permanent results with our lasers. <strong>Skeptical? Don’t just take our word for it</strong> – read laser hair removal reviews from real clients.</p>
          </div>
        </div>
        
        <div className="row mb-4 justify-content-around">
          <ReviewUsBtn city={city} link={google_reviews_start} platform="google" bgColor="#DB4E41" />
          <ReviewUsBtn city={city} link={yelp_start} platform="yelp" bgColor="#D82B2C" />
          <ReviewUsBtn city={city} link={facebook_start} platform="facebook" bgColor="#3E5A97" />
        </div>
      </div>
      
      <ReviewsBox city={city} />
      
    </section>
  )
}

export default ReviewsHero
