import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import BackToOptionBtn from './BackToOptionBtn'
import { Link } from 'gatsby'

function QuestionTwo({optionClickHandler, backToOptionsHandler, quiz, userInputs, counter}) {
  return (
    <div className="question-wrapper" style={{marginLeft: counter > 1 ? '-100%' : '0'}}>
      <div className="question">
        <h3 className="subhead-sm h4"><span>2.</span> What Color Is The Hair You Want To Remove?</h3>
        <hr />
      </div>
      <ul className={`options-container mb-0 list-group ${userInputs.question_2.option !== '' ? 'fold-up' : ''}`}>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_2', 'option_1', 'answer_1'])}>
          {quiz.question_2.option_1}
          </button>
        </li>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_2', 'option_2', 'answer_2'])}>
          {quiz.question_2.option_2}
          </button>
        </li>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_2', 'option_3', 'answer_3'])}>
          {quiz.question_2.option_3}
          </button>
        </li>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_2', 'option_4', 'answer_4'])}>
          {quiz.question_2.option_4}
          </button>
        </li>
        <li className="option">
          <button 
            className="list-group-item list-group-item-action"
            onClick={() => optionClickHandler(['question_2', 'option_5', 'answer_4'])}>
          {quiz.question_2.option_5}
          </button>
        </li>
      </ul>
      <ul className="answers-container bg-white mb-0 p-0" style={{transform: `${userInputs.question_2.option !== '' ? 'translateY(-260px)' : 'translateY(100px)'}`}}>
        <h4 className="h6 mx-sm-2"><sup><FaAsterisk /></sup> {userInputs.question_2.option}</h4>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_2.answer === 'answer_1' ? 'active' : ''}`}>
          <strong>You can likely be treated! </strong> 
          <span className="d-none d-sm-inline">It’s a common misconception that people with blonde or red hair won’t benefit from laser hair removal. The truth is that <Link to="/process/faqs/" className="main-blue">laser hair removal will work on most people with blonde or red hair</Link> as long as the hair has some pigment and isn’t “bleach blonde” or “platinum” in color. If you’re not sure, the best thing to do is to complete a consultation with an expert who has experience treating these hair colors. They will be able to tell you if there’s enough pigment in your hair for you to be treated.</span>
          <span className="d-sm-none">It’s a misconception that blonde or red hair won’t benefit from laser hair removal. <Link to="/process/faqs/" className="main-blue">Laser hair removal will work on most blonde or red hair</Link> as long as the hair isn’t “bleach blonde” or “platinum.”</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_2.answer === 'answer_2' ? 'active' : ''}`}>
          <strong>Unfortunately, you’re not a good candidate. </strong> 
          <span className="d-none d-sm-inline">As someone with white body hair, you are most likely not a good candidate for laser hair removal. During treatments, the <Link to="/process/" className="main-blue">laser works by targeting the pigment in the hair follicle</Link>. Hair that does not have any pigment, such as “peach fuzz” or “pure white” hair, will not respond to laser hair removal treatments.</span>
          <span className="d-sm-none">The <Link to="/process/" className="main-blue">laser works by targeting the pigment in the hair follicle</Link>, so hair with no pigment (“peach fuzz” or “pure white” hair) will not respond to treatments.</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_2.answer === 'answer_3' ? 'active' : ''}`}>
          <strong>It’s a possibility! </strong> 
          <span className="d-none d-sm-inline">Gray hair is well, a gray area in terms of laser hair removal. You’ll want to complete a consultation with an expert to determine exactly how much pigment is left for the laser to target.</span>
          <span className="d-sm-none">Gray hair is, well, a gray area in terms of laser hair removal. <Link to="#consultation" className="main-blue">Complete a consultation with an expert</Link> to determine how much pigment is left for the laser to target</span>
        </li>
        <li className={`answer mx-sm-2 mb-sm-2 py-2 p-sm-3 shadow-sm rounded-lg ${userInputs.question_2.answer === 'answer_4' ? 'active' : ''}`}>
          <strong>You’re eligible! </strong> 
          <span className="d-none d-sm-inline">It looks like you have dark body hair, which responds well to laser hair removal treatments. <Link to="/process/" className="main-blue">Learn more</Link></span>
          <span className="d-sm-none">If you have dark body hair, it will respond well to laser hair removal treatments. <Link to="/process/" className="main-blue">Learn more</Link>.</span>
        </li>

        <BackToOptionBtn questionNumber="2" backToOptionsHandler={backToOptionsHandler} />
      </ul>
    </div>
  )
}

export default QuestionTwo
