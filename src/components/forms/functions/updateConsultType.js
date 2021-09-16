function updateConsultType(type, formState) {
  const updatedFormState = { ...formState } // Shallow clone of formState

  // First scenario: if store does NOT support Virtual Consult Optin return the Shallow Clone as is
  // Virtual Consult Button will be disabled in this case
  if(!formState.store.virtual) return updatedFormState

  // Second scenario: if Store supports Virtual
  if(type === 'Virtual') {
    updatedFormState.include.consultType = 'Virtual'
    updatedFormState.include.campaignId = 'virtual_campaign_id'
  }
  if(type === 'Consult') {
    updatedFormState.include.consultType = 'Consult'
    updatedFormState.include.campaignId = '7011L000001K6qrQAC'
  }
  return updatedFormState
}

export default updateConsultType
