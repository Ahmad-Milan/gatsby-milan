import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import BackToOptionBtn from './BackToOptionBtn'
import { Link } from 'gatsby'

function QuestionFive({optionClickHandler, backToOptionsHandler, quiz, userInputs, counter}) {
  return (
    <div className="question-wrapper" style={{marginLeft: counter > 4 ? '-100%' : '0'}}>
      <div className="question">
        <h3 className="subhead-sm h4"><span>5.</span> Are you currently pregnant or plan to become pregnant in the near future?</h3>
        <hr />
      </div>
      <ul className={`options-container mb-0 list-group ${userInputs.question_5.option !== '' ? 'fold-up' : ''}`}>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_5', 'option_1', 'answer_1'])}>
          {quiz.question_5.option_1}
          </button>
        </li>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_5', 'option_2', 'answer_2'])}>
          {quiz.question_5.option_2}
          </button>
        </li>
      </ul>
      <ul className="answers-container bg-white mb-0 p-0" style={{transform: `${userInputs.question_5.option !== '' ? 'translateY(-260px)' : 'translateY(100px)'}`}}>
        <h4 className="h6 mx-sm-2"><sup><FaAsterisk /></sup> {userInputs.question_5.option}</h4>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_5.answer === 'answer_1' ? 'active' : ''}`}>
          <span className="d-none d-sm-inline"><strong>You’ll want to wait to begin your treatments!</strong> Laser hair removal might be a great solution to your unwanted hair, but you’ll want to wait to begin your treatments until after you deliver your baby. At that time, you’ll want to <Link to="#consultation" className="main-blue">consult an expert</Link> to determine when to begin your treatments. The great thing is that most places don’t make you complete your treatments by a certain date—or even offer lifetime packages—so if you find a great deal, you can purchase at the discounted price and get treated later.</span>
          <span className="d-sm-none"><strong>Wait to begin treatments!</strong> Laser hair removal might be a great solution, but wait to begin treatments until after you deliver your baby. At that time, <Link to="#consultation" className="main-blue">consult an expert</Link> to determine when to begin treatments.</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_5.answer === 'answer_2' ? 'active' : ''}`}>
          <strong>You can begin! </strong> 
          <span className="d-none d-sm-inline">There’s no reason to wait to begin your laser hair removal journey. One thing to keep in mind is that hormone changes associated with a future pregnancy or menopause could lead to new hair growth down the road. For that reason, it’s always a good idea to look for a company that offers <Link to="/specials/#guarantee" className="main-blue">unlimited laser hair removal treatments</Link> instead of just purchasing a set number of treatments.</span>
          <span className="d-sm-none">There’s no reason to wait to begin laser hair removal. Hormone changes associated with future pregnancy or menopause may lead to new hair growth down the road, so it’s always a good idea to look for a company that offers <Link to="/specials/#guarantee" className="main-blue">unlimited laser hair removal treatments</Link> instead of only purchasing a set number of treatments.</span>
        </li>

        <BackToOptionBtn questionNumber="5" backToOptionsHandler={backToOptionsHandler} />
      </ul>
    </div>
  )
}

export default QuestionFive
