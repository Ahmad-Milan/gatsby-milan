import React from 'react'

function FormSubmitting() {
  return (
    <center className="mt-5">
      <p className="h3 mb-4">Submitting...</p>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  )
}

export default FormSubmitting
