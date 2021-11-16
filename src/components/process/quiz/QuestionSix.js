import React from 'react'
import { Link } from 'gatsby'
import { MILAN_IMG_PATH } from '../../../constants/constants'

function QuestionSix() {
  return (
    <div className="question-wrapper">
      <div className="question">
        <h4 className="subhead-sm h4">What's Next?</h4>
        <hr />
      </div>
      <ul className="options-container mb-0 list-group list-group-horizontal-sm">
        <li className="option p-0 col-sm-4">
          <Link to="#consultation" className="stretched-link list-group-item list-group-item-action text-sm-center">
            <img className="img-fluid" src={`${MILAN_IMG_PATH}shared/other/Milan_Consult.png`} alt="Schedule a Free Consult" />
            <figcaption>Free Consult</figcaption>
          </Link>
        </li>
        <li className="option p-0 col-sm-4">
          <Link to="/process/faqs/" className="stretched-link list-group-item list-group-item-action text-sm-center">
            <img className="img-fluid mx-2 mx-sm-0" src={`${MILAN_IMG_PATH}shared/other/Milan_FAQ.png`} alt="Laser Hair Removal FAQ" />
            <figcaption>FAQs</figcaption>
          </Link>
        </li>
        <li className="option p-0 col-sm-4">
          <Link to="/process/faqs/#ask_new_question" className="stretched-link list-group-item list-group-item-action text-sm-center">
            <img className="img-fluid" src={`${MILAN_IMG_PATH}shared/other/Milan_Ask_Question.png`} alt="Ask a Question" />
            <figcaption>Ask a Question</figcaption>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default QuestionSix
