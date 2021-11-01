import React from 'react'

function TempReviews() {
  const stars = 'https://milanlaser.com/images/stars.png'
  return (
    <div className="container">
      <div className="row justify-content-around mt-5 mx-1">
        <div className="col-lg-5 bg-white p-3 shadow-sm mb-3 rounded">
          <div className="d-flex flex-column justify-content-between h-100">
            <p>I would recommend Milan Laser as I see a lot of difference in my hair growth taking this treatment. The staff here really takes care of their customers and will make them comfortable. You would see the best results possible immediately after 2-3 treatments and it just takes 15-20 minutes every month. I would definitely give them 5 start!!</p>
            <p className="mb-0 text-center">Sunkara K.<br /><img src={stars} width="90px" height="30%" alt=""/></p>
          </div>
        </div>
        
        <div className="col-lg-5 bg-white p-3 shadow-sm mb-3 rounded">
          <div className="d-flex flex-column justify-content-between h-100">
            <p>I recently just finished my treatments for my bikini line, and I couldn't be happier! The ladies are super friendly and make you feel comfortable. The appointments are super fast as well! I recommend Milan to anyone that is looking to get rid of any unwanted hair! I love this place!</p>
            <p className="mb-0 text-center">Janelle P.<br /><img src={stars} width="90px" height="30%" alt=""/></p>
          </div>
        </div>

        <div className="col-lg-5 bg-white p-3 shadow-sm mb-3 rounded">
          <div className="d-flex flex-column justify-content-between h-100">
            <p>The staff at the Lincoln location are amazing! They have been very helpful in explaining the process and each step along the way. And the results so far have been incredible! Only a few more spots to go before I don't have to shave again!</p>
            <p className="mb-0 text-center">Dave F.<br /><img src={stars} width="90px" height="30%" alt=""/></p>
          </div>
        </div>
        
        <div className="col-lg-5 bg-white p-3 shadow-sm mb-3 rounded">
          <div className="d-flex flex-column justify-content-between h-100">
            <p>I really am so glad I found this place! It's super easy and everyone is super nice. They care about you. AND IT WORKS! I had dark stubborn chin hair. Gone now!</p>
            <p className="mb-0 text-center">Claire S.<br /><img src={stars} width="90px" height="30%" alt=""/></p>
          </div>
        </div>
        
        <div className="col-lg-5 bg-white p-3 shadow-sm mb-3 rounded">
          <div className="d-flex flex-column justify-content-between h-100">
            <p>Really impressed with the results and the friendly service I've received at Milan Laser!</p>
            <p className="mb-0 text-center">Ryan W.<br /><img src={stars} width="90px" height="30%" alt=""/></p>
          </div>
        </div>
        
        <div className="col-lg-5 bg-white p-3 shadow-sm mb-3 rounded">
          <div className="d-flex flex-column justify-content-between h-100">
            <p>Super satisfied with the staff and couldn't be more pleased with my results! No more razors for this girl!!</p>
            <p className="mb-0 text-center">Elizabeth S.<br /><img src={stars} width="90px" height="30%" alt=""/></p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default TempReviews
