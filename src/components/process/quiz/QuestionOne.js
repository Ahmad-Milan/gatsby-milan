import React from 'react'
import { FaArrowUp, FaAsterisk } from 'react-icons/fa'

function QuestionOne({optionClickHandler, backToOptionsHandler, quiz, userInputs, counter}) {
  return (
    <div className="question-wrapper" style={{marginLeft: counter > 0 ? '-100%' : '0'}}>
      <div className="question">
        <h3 className="subhead-sm h4"><span>1.</span> How Old Are You?</h3>
        <hr />
      </div>
      <ul className={`options-container mb-0 list-group flex-row flex-wrap align-items-baseline align-content-start ${userInputs.question_1.option !== '' ? 'fold-up' : ''}`}>
        <li className="option col-6" data-option="1">
          <button 
            className="list-group-item list-group-item-action" 
            onClick={() => optionClickHandler(['question_1', 'option_1', 'answer_1'])}>
            {quiz.question_1.option_1}
          </button>  
        </li>
        <li className="option col-6" data-option="2">
          <button 
            className="list-group-item list-group-item-action" 
            onClick={() => optionClickHandler(['question_1', 'option_2', 'answer_2'])}>
            {quiz.question_1.option_2}
          </button>  
        </li>
        <li className="option col-6" data-option="3">
          <button 
            className="list-group-item list-group-item-action" 
            onClick={() => optionClickHandler(['question_1', 'option_3', 'answer_3'])}>
            {quiz.question_1.option_3}
          </button>  
        </li>
        <li className="option col-6" data-option="4">
          <button 
            className="list-group-item list-group-item-action" 
            onClick={() => optionClickHandler(['question_1', 'option_4', 'answer_3'])}>
            {quiz.question_1.option_4}
          </button>  
        </li>
        <li className="option col-6" data-option="5">
          <button 
            className="list-group-item list-group-item-action" 
            onClick={() => optionClickHandler(['question_1', 'option_5', 'answer_3'])}>
            {quiz.question_1.option_5}
          </button>  
        </li>
        <li className="option col-6" data-option="6">
          <button 
            className="list-group-item list-group-item-action" 
            onClick={() => optionClickHandler(['question_1', 'option_6', 'answer_3'])}>
            {quiz.question_1.option_6}
          </button>  
        </li>
        <li className="option col-6" data-option="7">
          <button 
            className="list-group-item list-group-item-action" 
            onClick={() => optionClickHandler(['question_1', 'option_7', 'answer_3'])}>
            {quiz.question_1.option_7}
          </button>  
        </li>
      </ul>
      <ul className="answers-container bg-white mb-0 p-0" style={{transform: `${userInputs.question_1.option !== '' ? 'translateY(-260px)' : 'translateY(100px)'}`}}>
        <h4 className="h6 mx-sm-2"><sup><FaAsterisk /></sup> {userInputs.question_1.option}</h4>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_1.answer === 'answer_1' ? 'active' : ''}`}>
          <strong>It's too soon!</strong> 
          <span className="d-none d-sm-inline">You’re too young to determine whether or not laser hair removal would be able to help you say goodbye to unwanted hair forever. Most places require you to be at least 16 years old to be eligible for laser hair removal treatments.</span>
          <span className="d-sm-none">You’re too young for us to know if laser hair removal is a good option for you. Most places require clients to be at least 16 years old.</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_1.answer === 'answer_2' ? 'active' : ''}`}>
          <strong>You may need permission!</strong> 
          <span className="d-none d-sm-inline">Laser hair removal might be a good solution to your unwanted hair, but some places might require a parent or guardian's consent in order for you to receive laser hair removal treatments.</span>
          <span className="d-sm-none">Laser hair removal might be a good solution for you, but some places might require a parent or guardian's consent for you to receive treatments.</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_1.answer === 'answer_3' ? 'active' : ''}`}>
          <strong>You’re eligible! </strong> 
          <span className="d-none d-sm-inline">You can consent to begin laser hair removal treatments on your own. At this point, the color of your unwanted hair and your natural skin tone are key factors to consider.</span>
          <span className="d-sm-none">You can consent to begin laser hair removal treatments on your own. At this point, the color of your unwanted hair is a key factor.</span>
        </li>

        <span className="show-options-btn" onClick={() => backToOptionsHandler('question_1')}>Back to options <FaArrowUp /></span>
      </ul>
    </div>
  )
}

export default QuestionOne
