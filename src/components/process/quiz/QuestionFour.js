import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import BackToOptionBtn from './BackToOptionBtn'

function QuestionFour({optionClickHandler, backToOptionsHandler, quiz, userInputs, counter}) {
  return (
    <div className="question-wrapper" style={{marginLeft: counter > 3 ? '-100%' : '0'}}>
      <div className="question">
        <h3 className="subhead-sm h4"><span>4.</span> Do you regularly use tanning beds and/or sunbathe?</h3>
        <hr />
      </div>
      <ul className={`options-container mb-0 list-group ${userInputs.question_4.option !== '' ? 'fold-up' : ''}`}>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_4', 'option_1', 'answer_1'])}>
          {quiz.question_4.option_1}
          </button>
        </li>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_4', 'option_2', 'answer_2'])}>
          {quiz.question_4.option_2}
          </button>
        </li>
      </ul>
      <ul className="answers-container bg-white mb-0 p-0" style={{transform: `${userInputs.question_4.option !== '' ? 'translateY(-260px)' : 'translateY(100px)'}`}}>
        <h4 className="h6 mx-sm-2"><sup><FaAsterisk /></sup> {userInputs.question_4.option}</h4>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_4.answer === 'answer_1' ? 'active' : ''}`}>
          <strong>Can you handle not tanning for a little while? </strong> 
          <span className="d-none d-sm-inline">Laser hair removal may be able to help you say goodbye to unwanted hair forever if you take a temporary break from tanning. That’s because, in order to safely perform your laser hair removal treatments, most companies need your skin to be its natural color in order to choose the correct settings for the laser.</span>
          <span className="d-sm-none">Laser hair removal may be a good option if you take a break from tanning. For your safety, most companies need your skin to be its natural color to choose the correct laser settings.</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_4.answer === 'answer_2' ? 'active' : ''}`}>
          <strong>Great! </strong> 
          <span className="d-none d-sm-inline">Your skin is its natural color which makes it safe to treat! Avoiding sun exposure and not using tanning beds is a great way to ensure that you can safely begin your laser hair removal treatments.</span>
          <span className="d-sm-none">Your skin is its natural color, which makes it safe to treat! Avoiding sun exposure and tanning beds is a great way to ensure you can be treated.</span>
        </li>

        <BackToOptionBtn questionNumber="4" backToOptionsHandler={backToOptionsHandler} />
      </ul>
    </div>
  )
}

export default QuestionFour
