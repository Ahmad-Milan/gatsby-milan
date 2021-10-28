import React from 'react'

function ReviewsBox({city}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="reviews-box px-3 py-2 m-2 col-md-10">
          {
            city.locations.map((location, x) => {
              if(location.reviews.reviews_token !== '') return(
                <div key={x} className="pt-3" data-romw-token={location.reviews.reviews_token}></div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ReviewsBox
