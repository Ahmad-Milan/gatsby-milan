function onSubmit(formState, siteData, formRef, succesRef) {
  if(formState.include.action === 'question') {
    succesRef.current.value = siteData.origin + 'form/processing.html'
  }
  if(formState.include.action === 'self_schedule') {
    succesRef.current.value = `https://milanlaser.force.com/s/?firstname=${formState.user.first_name}&lastname=${formState.user.last_name}&phone=${formState.user.phone.slice(3)}&email=${formState.user.email}&zip=${formState.store.zipcode}&success_url=${siteData.origin}form/self-success-force.html`
  }
  console.log(formState)
  // formRef.current.submit()
}

export default onSubmit