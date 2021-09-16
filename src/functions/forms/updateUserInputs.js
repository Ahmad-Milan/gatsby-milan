function updateUserInputs(action, formState, formikProps) {
  const updatedFormState = { ...formState } // Shallow clone of formState
  updatedFormState.include.action = action

  // Update formState user values: get the values from formikProps.values
  updatedFormState.user.first_name = formikProps.values.first_name
  updatedFormState.user.last_name = formikProps.values.last_name
  updatedFormState.user.email = formikProps.values.email
  updatedFormState.user.phone = formikProps.values.phone

  return updatedFormState
}

export default updateUserInputs
