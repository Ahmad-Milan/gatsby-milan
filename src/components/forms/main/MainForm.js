import React, {useState, useRef} from 'react'
import { Formik, Form } from 'formik'
import PhoneInput from '../shared/PhoneInput'
import getStore from '../../../functions/general/getStore'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import updateSubscription from '../../../functions/forms/updateSubscription'
import formData from '../../../data/formData.json'
import updateDropdown from '../../../functions/forms/updateDropdown'
import updateUserInputs from '../../../functions/forms/updateUserInputs'
import validationSchema from '../shared/validationSchema'
import EmailInput from '../shared/EmailInput'
import FullNameInput from '../shared/FullNameInput'
import TextArea from '../shared/TextArea'
import SubscriptionBox from '../shared/SubscriptionBox'
import SelectLocation from '../shared/SelectLocation'


function MainForm({siteData, action_link}) {

  // if store not selected yet.... 
  // (this is useful when navigating between pages and the location is already selected somewhere else in other forms)
  if(!formData.store.salesforceValue) {
    // Whether it's a single location city or multiple, 
    // getStore will return the first element of the city locations array
    let store = getStore(siteData.locations[0].salesforceValue)

    // Update formData.store
    updateStoreProps(formData, store)
  }
  const [formState, setFormState] = useState(formData)
  const formRef = useRef(null)

  const initialValues = {
    first_name: formState.user.first_name,
    phone: formState.user.phone,
    email: formState.user.email,
    description: formState.user.description
  }

  // Locations dropdown onChange handler
  const dropdownHandler = salesforceValue => {
    if(salesforceValue === '') return
    else setFormState(updateDropdown(salesforceValue, formState, siteData))
  }

  // Mailchimp checkbox 
  const handleSubscription =() => setFormState(updateSubscription(formState))

  const onSubmit = (user, formRef) => {
    updateUserInputs(formState, user)
    formRef.current.submit()
  }

  return (
        <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(user) => onSubmit(user, formRef)}>
          {// This way we can get access to all formik props
          formik => {
            return (
              <Form 
                className="w-100 pb-4" ref={formRef} method="POST"
                action={`https://cors-milanlaser.herokuapp.com/https://go.milanlaser.com/${action_link}`}>
                <input type="hidden" name="oid" value="00D410000014bPe" />
                <input type="hidden" name="retURL" value={`${siteData.origin}/form/processing.html`} />
                <input className="lead_source" type="hidden" name="lead_source"  id="lead_source" value="Website" />

                <div className="row justify-content-center mx-auto pt-md-2">
                  <div className="col-md-6 mb-3">
                    <FullNameInput formik={formik} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <PhoneInput />
                  </div>
                </div>
                
                <div className="row justify-content-center mx-auto">
                  <div className="col-md-6 mb-3">
                    <EmailInput formik={formik} />
                  </div>

                  <div className="col-md-6 mb-3">
                    <SelectLocation formState={formState} dropdownHandler={dropdownHandler} />
                  </div>
                </div>

                <div className="row justify-content-center mx-auto overflow-hidden">
                  <div className="mb-2">
                    <TextArea />
                  </div>
                </div>

                <div className="row justify-content-center mx-auto">
                  <div className="custom-checkbox d-flex">
                    <SubscriptionBox formState={formState} handleSubscription={handleSubscription} mailchimpID="mailchimp-mainForm" />
                  </div>
                </div>

                <div id="actions-btns" className="row justify-content-center mt-4">
                  <div className="col-10 col-lg-6 text-center">
                    <button
                      className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit" 
                      disabled={!formik.isValid}>SUBMIT</button>
                  </div>
                  <p className="text-center mt-3 consent-msg">I consent by electronic signature to be contacted by Milan Laser by live agent, email &amp; automatic telephone dialer for information, offers or advertisements via email/ phone call/ text message at the number &amp; email provided. No purchase necessary.</p>
                </div>
              </Form>
            )
          }
        }

        </Formik>


  )
}

export default MainForm
