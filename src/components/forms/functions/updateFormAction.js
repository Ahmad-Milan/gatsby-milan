import actionInit from './actionInit'
import checkTouched from './checkTouched'

// The action is either 'question' OR 'self_schedule'
function updateFormAction(action, formikProps, formState) {

  // Here, the form user input fields will set to be touched if they're not already
  // Also they will get validated
  actionInit(formikProps)

  const updatedFormState = { ...formState } // Shallow clone of formState
  updatedFormState.include.action = action

  // Update formState user values: get the values from formikProps.values
  updatedFormState.user.first_name = formikProps.values.first_name
  updatedFormState.user.last_name = formikProps.values.last_name
  updatedFormState.user.email = formikProps.values.email
  updatedFormState.user.phone = formikProps.values.phone

  if(action === 'question') {
    updatedFormState.include.leadsource = 'Website'
    updatedFormState.include.campaignId = ''
    updatedFormState.user.description = formikProps.values.description
    // if action is question, there's no need for consultType
    updatedFormState.include.consultType = ''
  }
  if(action === 'self_schedule') {
    updatedFormState.include.leadsource = 'Self-Schedule Site'
    // if user fields are not touched or the form is inValid scroll up
    checkTouched(formikProps, action)
  }

  return updatedFormState
}

export default updateFormAction
