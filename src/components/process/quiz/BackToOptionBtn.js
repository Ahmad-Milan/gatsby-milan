import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

function BackToOptionBtn({questionNumber, backToOptionsHandler}) {
  return (
    <span 
      role="button" tabIndex="0" 
      className="show-options-btn" 
      onClick={() => backToOptionsHandler(`question_${questionNumber}`)} 
      onKeyDown={e => e.key === 'Enter' && backToOptionsHandler(`question_${questionNumber}`)}>
        Back to options <FaArrowUp />
    </span>
  )
}

export default BackToOptionBtn
