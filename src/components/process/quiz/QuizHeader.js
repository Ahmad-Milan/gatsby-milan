import React from 'react'
import { Link } from 'gatsby'

function QuizHeader() {
  return (
    <div className="text-center row justify-content-center px-3">
      <h1 className="h2 mb-4">Are You a Good Candidate for Laser Hair Removal?</h1>
      <h2 className="h5">Top 5 Questions to Answer Before You Begin Laser Hair Removal</h2>
      <p className="mt-4 col-lg-8 px-0 lh-base" >When performed correctly, laser hair removal is a <Link to="/process/compare/" className="main-blue">very effective method for removing unwanted hair</Link>. But are you a good candidate for laser hair removal? The answers to these common questions will help determine if you qualify.</p>
    </div>
  )
}

export default QuizHeader
