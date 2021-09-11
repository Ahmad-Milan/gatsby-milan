function updateConsultType(type, formState) {
  if(!formState.store.virtual) return
  const updatedFormState = { ...formState }
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
