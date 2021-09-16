import React from 'react'
// Error Message Alert Component
function TextError(props) {
  return (
    <div className="alert-danger px-3 py-1 mt-1 rounded">
      {props.children}
    </div>
  )
}

export default TextError
