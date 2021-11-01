import React from 'react'

function ReviewsBox({stores}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="reviews-box px-3 py-2 m-2 col-md-10">
          {
            stores.map((store, x) => (
              <div key={x} className="pt-3" data-romw-token={store.reviews.reviews_token}></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ReviewsBox
