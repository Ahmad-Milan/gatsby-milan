function updateUserInputs(formState, user) {
  const updatedFormState = { ...formState } // Shallow clone of formState

  // Update formState user values: get the values from formikProps.values
  updatedFormState.user.first_name = user.first_name
  if(user.last_name) updatedFormState.user.last_name = user.last_name
  updatedFormState.user.email = user.email
  if(user.phone) updatedFormState.user.phone = user.phone
  if(user.description) updatedFormState.user.description = user.description
  
  return updatedFormState
}

export default updateUserInputs
