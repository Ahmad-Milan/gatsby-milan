import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Reviews({store}) {

  const initialReview = {
    author_name: 'Marina S.',
    text: ' I have always wanted laser hair removal, but was a little nervous of the unknown. This place has exceptional customer service and has made me feel extremely comfortable during appointments. The facility is clean and welcoming and the results are immediate! I HIGHLY recommend Milan Laser to anyone considering laser hair removal and am so grateful to have found such a warm and welcoming place.'
  }

  const [reviews, setReviews] = useState([initialReview])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false
  }

  const key = process.env.Screen_Cloud_Api_Key
  const place_id = store.place_id
  const PROXY_URL = 'https://cors-milanlaser.herokuapp.com/'
  const TARGET_URL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id='+place_id+'&fields=name,review,formatted_address&key='
  const URL = PROXY_URL + TARGET_URL + key

  useEffect(() => {
    axios({
      method: 'GET',
      url: URL,
      contentType: "application/json",
      dataType: 'json',
    })
    .then(res => setReviews(res.data.result.reviews))
    .catch(err => console.error(err))
  }, [])

  return (
    <section className="w-100 py-4 text-white customers-reviews">
      <div className="container">
        <h2 className="text-center subhead-sm mb-4">What Our Chandler Customers Are Saying</h2>
        <div className="row">
          <div className="col-md-1 text-right d-none d-md-block">
            <img src="https://milanlaser.com/images/left-quote.svg" alt="" className="w-75" />
          </div>
          <div className="col-md-10 text-center text-white">
            <Slider className="overflow-hidden mb-0" {...settings}>
              {
                reviews.map((review, index) => (
                  <div key={index} className="d-inline-block">
                    <p>
                      <i className="fas fa-quote-left d-md-none"></i>&nbsp;
                      {review.text.length > 400 ? review.text.substr(0, 400) + '...' : review.text}
                      &nbsp;<i className="fas fa-quote-right d-md-none"></i>
                    </p>
                    <p><img className="mx-auto" src="https://milanlaser.com/images/stars.svg" alt="" style={{maxWidth: '150px'}} /></p>
                    <div>{review.author_name.substring(0, review.author_name.indexOf(" ") + 2)}.</div>
                  </div>
                ))
              }
            </Slider>
          </div>
          <div className="col-md-1 text-right d-none d-md-block">
            <img src="https://milanlaser.com/images/right-quote.svg" alt="" className="w-75" />
          </div>
        </div>
      </div>
      <span id="about-us"></span>
    </section>
  )
}

export default Reviews
