function updateUserInputs(event, formState) {
  const { id, value } = event.target
  // the id is the input id which should match the user obj props 
  const updatedFormState = { ...formState } // Shallow clone from original 
  if(id === 'mailchimp') {
    updatedFormState.user[id] = !updatedFormState.user[id]
  } else {
    updatedFormState.user[id] = value
  }

  return updatedFormState
}

export default updateUserInputs
