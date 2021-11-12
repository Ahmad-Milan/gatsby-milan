import React from 'react'
import { Link } from 'gatsby'

function SignUpSuccess() {
  return (
    <center className="px-3">
      <p className="h1 light-blue">ALL SET!</p>
      <p className="h4 mt-3 mb-3">You're signed up for our latest specials.</p>
      <p className="h6">If you have any questions in the meantime, <br /> <Link className="light-blue" to="/locations/contact/">please contact us</Link>.</p>
      <p className="mb-0 mt-3">Thanks,</p>
      <p className="mb-0">Milan Laser</p>
    </center>
  )
}

export default SignUpSuccess
