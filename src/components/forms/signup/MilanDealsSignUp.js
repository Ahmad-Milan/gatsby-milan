import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import validateEmail from '../shared/validateEmail'
import TextError from '../shared/TextError'
import getStore from '../../../utils/helpers/general/getStore'
import updateStoreProps from '../../../utils/helpers/forms/updateStoreProps'
import formData from '../../../assets/data/formData.json'
import updateDropdown from '../../../utils/helpers/forms/updateDropdown'
import updateUserInputs from '../../../utils/helpers/forms/updateUserInputs'
import axios from 'axios'
import qs from 'qs'
import { siteData } from '../../templates/Layout'
import LocationsDropdown from '../shared/LocationsDropdown'
import * as Yup from 'yup'
import SignUpSuccess from '../shared/SignUpSuccess'
import FormFailed from '../shared/FormFailed'
import FormSubmitting from '../shared/FormSubmitting'
import { WEB_TO_LEAD_LINK } from '../../../utils/constants/constants'

const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email!').required('Email is required!')
})

function MilanDealsSignUp() {
  // if store not selected yet.... 
  // (this is useful when navigating between pages and the location is already selected somewhere else in other forms)
  if(!formData.store.salesforceValue) {
    // Whether it's a single location city or multiple, 
    // getStore will return the first element of the city locations array
    let store = getStore(siteData.locations[0].salesforceValue).store
    // Update formData.store
    updateStoreProps(formData, store)
  }

  const [formState, setFormState] = useState(formData)
  const initialValues = { email: formState.user.email }
  // Locations dropdown onChange handler
  const dropdownHandler = salesforceValue => {
    if(salesforceValue === '') return
    else setFormState(updateDropdown(salesforceValue, formState, siteData))
  }
  const [submitting, setSubmitting] = useState(false)
  const [leadSuccess, setLeadSuccess] = useState(false)
  const [signupFailed, setSignupFailed] = useState(false)

  const onSubmit = (user) => {
    updateUserInputs(formState, user)
    setSubmitting(true)
    axios({
      method: 'POST',
      url: WEB_TO_LEAD_LINK,
      data: qs.stringify({
        'email': formState.user.email,
        'updates': true,
        '00N1L00000F9eBV': formState.store.salesforceValue,
        'oid': '00D410000014bPe',
        'lead_source': 'MailChimp',
        'retUrl': siteData.origin
      }),
      config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    }).then(res => {
      console.log(res.status, 'Subscribed to mailchimp')
      setSubmitting(false)
      setLeadSuccess(true)
    }).catch((err) => { 
      console.error(err)
      setSubmitting(false)
      setSignupFailed(true)
     })
  }

  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={(user) => onSubmit(user)}>
    { // This way we can get access to all formik props
      formik => {
        return (
          <Form className="w-100" >
            { submitting ? <FormSubmitting /> : leadSuccess ? <SignUpSuccess /> : signupFailed ? <FormFailed />
            :
            <div className="row">
              <div className={`mb-3 ${siteData.multiple ? 'col-12' : 'col-sm-8'}`}>
                <Field 
                  className="form-control" type="email" placeholder="youremail@mailbox.com" 
                  id="email" name="email" validate={validateEmail}
                  style={formik.touched.email && formik.errors.email ? {borderColor: 'red'} : null} />
                <ErrorMessage name="email" component={TextError} />
              </div>
              {
                siteData.multiple &&
                <div className="col-sm-8">
                  <select
                    value={formState.store.salesforceValue} onChange={ event => dropdownHandler(event.target.value) }
                    className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                    <LocationsDropdown />
                  </select>
                </div>
              }
              <div className="col-sm-4 mt-3 mt-sm-0 text-center">
                <button
                  className="w-100 cta-btn red-bg-btn pt-2 pb-1 shadow-sm" type="submit" 
                  disabled={!formik.isValid}>SEND</button>
              </div>
              <div>
              <p className={`consent-msg text-center mb-0 ${siteData.multiple ? 'mt-3': ''}`}>No Spam ??? Never Shared with 3rd Parties <br />
              I consent by electronic signature to be contacted by Milan Laser by email for offers or advertisements via email at the email address provided.</p>
              </div>
            </div>
           }
          </Form>
        )
      }
    }
  </Formik>
  )
}

export default MilanDealsSignUp

