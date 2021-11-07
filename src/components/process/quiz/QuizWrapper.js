import React from 'react'
import '../styles.css'
import QuizBox from './QuizBox'
import QuizHeader from './QuizHeader'
import QuizFooter from './QuizFooter'

function QuizWrapper() {
  return (
    <section className="full-section background hero light-blue-bg">
      <div className="container">
        <QuizHeader />
        <QuizBox />
        <QuizFooter />
      </div>
    </section>
  )
}

export default QuizWrapper
