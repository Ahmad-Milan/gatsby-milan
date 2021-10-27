import React from 'react'
import FaqsForm from '../../forms/faqs/FaqsForm'

function AskNewQuestion() {
  return (
    <section id="ask_new_question" className="w-100 py-5">
      <div className="container ">
        <div className="row text-white align-items-center">
          <div className="col-lg-6 text-center mb-3">
            <h3 className="default-msg h4 text-capitalize">Don’t see your question answered? <br /> <span className="h3 fw-bold">Ask it here</span></h3>
          </div>
          <div className="col-lg-6">
            <FaqsForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AskNewQuestion
