import React, {useState} from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { quiz, initialInputs } from './quizConstants'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import QuestionFive from './QuestionFive'
import QuestionSix from './QuestionSix'

function QuizBox() {

  const [userInputs, setUserInputs] = useState(initialInputs)

  const optionClickHandler = optionData => {
    const userInputsClone = {...userInputs}
    userInputsClone[optionData[0]].option = quiz[optionData[0]][optionData[1]]
    userInputsClone[optionData[0]].answer = optionData[2]
    setUserInputs(userInputsClone)
  }
  const backToOptionsHandler = question => {
    const userInputsClone = {...userInputs}
    userInputsClone[question].option = ''
    setUserInputs(userInputsClone)
  }

  const [counter, setCounter] = useState(0)
  const quizActionBtnHandler = action => {
    switch (action) {
      case 'prev':
        setCounter(prevCounter => prevCounter - 1)
        break;
      case 'next':
        setCounter(prevCounter => prevCounter + 1)
        break
      default:
        setCounter(0)
        break;
    }
  }

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-lg-8 mb-5">
        <div className="quiz-box p-3 p-sm-4 bg-white shadow">
          <div className="questions-container d-flex overflow-hidden">

            <QuestionOne 
              backToOptionsHandler={backToOptionsHandler}
              optionClickHandler={optionClickHandler}
              quiz={quiz} userInputs={userInputs} counter={counter} />
              
            <QuestionTwo 
              backToOptionsHandler={backToOptionsHandler}
              optionClickHandler={optionClickHandler}
              quiz={quiz} userInputs={userInputs} counter={counter} />

            <QuestionThree 
              backToOptionsHandler={backToOptionsHandler}
              optionClickHandler={optionClickHandler}
              quiz={quiz} userInputs={userInputs} counter={counter} />

            <QuestionFour 
              backToOptionsHandler={backToOptionsHandler}
              optionClickHandler={optionClickHandler}
              quiz={quiz} userInputs={userInputs} counter={counter} />
            
            <QuestionFive 
              backToOptionsHandler={backToOptionsHandler}
              optionClickHandler={optionClickHandler}
              quiz={quiz} userInputs={userInputs} counter={counter} />

            <QuestionSix />

          </div>

					<hr className="mt-0" />
          <div className="quiz-btns position-relative" >
            <button
              style={{display: counter < 1 ? 'none' : 'block'}}
              className="navy-bg-btn prev-question p-1 text-white border-0 float-start"
              onClick={() => quizActionBtnHandler('prev')}><FaArrowLeft /> PREVIOUS</button>
            <button
              style={{display: counter > 4 ? 'none' : 'block'}}
              className="navy-bg-btn next-question p-1 text-white border-0 float-end"
              onClick={() => quizActionBtnHandler('next')}>NEXT <FaArrowRight /></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default QuizBox
