import React from 'react'

function FaqsSuccess({askNewQuestionHandler, formik}) {
  return (
    <center className="px-3 mt-3 success">
      <p className="h1 text-success">SUCCESS!</p>
      <p className="h3 mt-3 mb-3">Your request has been submitted.</p>
      <p className="h5">We will be contacting you shortly with more information. During normal business hours you can expect to hear from us in about 15 minutes.</p>
      <button 
        className="w-100 cta-btn light-btn py-2 shadow-sm" 
        onClick={() => askNewQuestionHandler(formik)}>
        ASK ANOTHER QUESTION
      </button>
    </center>
  )
}

export default FaqsSuccess
