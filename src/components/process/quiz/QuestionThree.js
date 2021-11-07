import React from 'react'
import { FaArrowUp, FaAsterisk } from 'react-icons/fa'
import { Link } from 'gatsby'

function QuestionThree({optionClickHandler, backToOptionsHandler, quiz, userInputs, counter}) {
  return (
    <div className="question-wrapper" style={{marginLeft: counter > 2 ? '-100%' : '0'}}>
      <div className="question">
        <h3 className="subhead-sm h4"><span>3.</span> What Is Your Natural Skin Tone?</h3>
        <hr />
      </div>
      <ul className={`options-container mb-0 list-group flex-row flex-wrap align-items-baseline align-content-start ${userInputs.question_3.option !== '' ? 'fold-up' : ''}`}>
        <li className="option col-6">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_3', 'option_1', 'answer_1'])}>
          {quiz.question_3.option_1}
          </button>
        </li>
        <li className="option col-6">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_3', 'option_2', 'answer_1'])}>
          {quiz.question_3.option_2}
          </button>
        </li>
        <li className="option col-6">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_3', 'option_3', 'answer_1'])}>
          {quiz.question_3.option_3}
          </button>
        </li>
        <li className="option col-6">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_3', 'option_4', 'answer_2'])}>
          {quiz.question_3.option_4}
          </button>
        </li>
        <li className="option col-6">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_3', 'option_5', 'answer_2'])}>
          {quiz.question_3.option_5}
          </button>
        </li>
        <li className="option col-6">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_3', 'option_6', 'answer_2'])}>
          {quiz.question_3.option_6}
          </button>
        </li>
      </ul>
      <ul className="answers-container bg-white mb-0 p-0" style={{transform: `${userInputs.question_3.option !== '' ? 'translateY(-260px)' : 'translateY(100px)'}`}}>
        <h4 className="h6 mx-sm-2"><sup><FaAsterisk /></sup> {userInputs.question_3.option}</h4>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_3.answer === 'answer_1' ? 'active' : ''}`}>
          <strong>You’re eligible! </strong>
          <span className="d-none d-sm-inline">Laser hair removal will be a great option for you. You’ll most likely want to have your treatments completed somewhere that utilizes <Link to="/areas/darkskin/" className="main-blue">Alexandrite laser technology</Link>.</span>
          <span className="d-sm-none">Laser hair removal is a great option for you. You’ll want your treatments completed somewhere that utilizes <Link to="/areas/darkskin/" className="main-blue">Alexandrite laser technology</Link>.</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_3.answer === 'answer_2' ? 'active' : ''}`}>
          <strong>You’re eligible—as long as they use the right technology! </strong> 
          <span className="d-none d-sm-inline">Advances in laser hair removal technology have made it <Link to="/areas/darkskin/" className="main-blue">safe to use on all skin tones</Link>. However, you’ll want to make sure that you find a place that can complete your treatments using Nd: Yag technology.</span>
          <span className="d-sm-none">Advances in laser hair removal technology have made it <Link to="/areas/darkskin/" className="main-blue">safe for all skin tones</Link>. However, make sure you find a place that can complete your treatments using Nd: Yag technology.</span>
        </li>

        <span className="show-options-btn" onClick={() => backToOptionsHandler('question_3')}>Back to options <FaArrowUp /></span>
      </ul>
    </div>
  )
}

export default QuestionThree
