import actionInit from './actionInit'
import checkTouched from './checkTouched'
import updateUserInputs from './updateUserInputs'

// The action is either 'question' OR 'self_schedule'
function updateFormAction(action, formikProps, formState) {

  // Here, the form user input fields will set to be touched if they're not already
  // Also they will get validated
  actionInit(formikProps)

  // Update formState's user inputs
  const updatedFormState = updateUserInputs(formState, formikProps)
  updatedFormState.include.action = action

  if(action === 'question') {
    updatedFormState.include.leadsource = 'Website'
    updatedFormState.include.campaignId = ''
    updatedFormState.user.description = formikProps.values.description
  }
  if(action === 'self_schedule') {
    updatedFormState.include.leadsource = 'Self-Schedule Site'
    updatedFormState.include.campaignId = '7011L000001K6qrQAC'
    // if user fields are not touched or the form is inValid scroll up
    checkTouched(formikProps, action)
  }

  return updatedFormState
}

export default updateFormAction
