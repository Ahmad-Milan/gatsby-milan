function goBackBtn(formState) {
  const updatedFormState = { ...formState }
  updatedFormState.include.action = ''
  if(!formState.store.virtual) {
    updatedFormState.include.consultType = 'Consult'
    updatedFormState.include.leadsource = 'Website'
    updatedFormState.include.leadsource = 'Self-Schedule Site'
  }
  return updatedFormState
}

export default goBackBtn
