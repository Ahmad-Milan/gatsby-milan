import actionInit from './actionInit'
import checkTouched from './checkTouched'

function askQuestionBtn(formikProps) {
  // 1. check if user fields are touched and scroll to the right place
  checkTouched(formikProps, 'question')

  // 2. Initiate Form Action
  // Here, the form user input fields will set to be touched if they're not already
  // Also they will get validated
  actionInit(formikProps)

  // 3. Return TRUE so the setAskQuestionClicked sets to be true
  return true
}

export default askQuestionBtn