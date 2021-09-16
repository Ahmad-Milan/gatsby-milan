import actionInit from './actionInit'
import checkTouched from './checkTouched'
import updateUserInputs from './updateUserInputs'

function askQuestion(formikProps, formState) {
  // 1. check if user fields are touched and scroll to the right place
  checkTouched(formikProps, 'question')

  // 2. Initiate Form Action
  // Here, the form user input fields will set to be touched if they're not already
  // Also they will get validated
  actionInit(formikProps)

  // Update formState's user inputs
  const updatedFormState = updateUserInputs('question', formState, formikProps)

  return updatedFormState
}

export default askQuestion