function goBackBtn(formState) {
  const updatedFormState = { ...formState } // Shallow clone of formState

  // Reset form action
  updatedFormState.include.action = ''

  // if Store does NOT support Virtual Consult Option
  if(!formState.store.virtual) {
    updatedFormState.include.consultType = 'Consult'
    updatedFormState.include.leadsource = 'Website'
    updatedFormState.include.leadsource = 'Self-Schedule Site'
  }
  return updatedFormState
}

export default goBackBtn
