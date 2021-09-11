function updateFormAction(action, formState) {
  const updatedFormState = { ...formState }
  updatedFormState.include.action = action
  if(action === 'question') {
    updatedFormState.include.leadsource = 'Website'
    updatedFormState.include.campaignId = ''
    updatedFormState.include.consultType = ''
  }
  if(action === 'self_schedule') {
    updatedFormState.include.leadsource = 'Self-Schedule Site'
  }
  return updatedFormState
}

export default updateFormAction
