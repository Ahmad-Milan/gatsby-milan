// import axios from "axios"
function onSubmit(formState, siteData, formRef, succesRef) {
  formState.user.phone = formState.user.phone.slice(3)
  console.log(formState.user)
  if(formState.include.action === 'question') {
    succesRef.current.value = siteData.url + 'form/processing.html'
  }
  if(formState.include.action === 'self_schedule') {
    let zip
    switch (formState.include.consultType) {
      case 'Consult':
        zip = formState.store.zipcode
        break;
      case 'Virtual':
        zip = formState.store.virtualZip
        break;
    
      default: zip = formState.store.zipcode
        break;
    }
    succesRef.current.value = `https://milanlaser.force.com/s/?firstname=${formState.user.first_name}&lastname=${formState.user.last_name}&phone=${formState.user.phone}&email=${formState.user.email}&zip=${zip}&success_url=${siteData.url}form/self-success-force.html&workType=${formState.include.consultType}`
  }
  console.log(succesRef.current.value)
  formRef.current.submit()
}

export default onSubmit