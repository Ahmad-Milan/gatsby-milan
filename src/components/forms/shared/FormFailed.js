import React from 'react'
import { Link } from 'gatsby'

function FormFailed() {
  return (
    <center className="alert alert-danger col-md-10 col-lg-6 mx-auto">
      <p>Ruh Roh! Something went wrong. Form not submitted. :(</p>
      Click <Link to="/locations/contact/" className="main-blue text-decoration-underline">here</Link> to contact us.
    </center>
  )
}

export default FormFailed
