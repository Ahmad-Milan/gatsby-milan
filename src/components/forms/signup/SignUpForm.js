import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import getStore from '../../../functions/general/getStore'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import formData from '../../../data/formData.json'
import updateDropdown from '../../../functions/forms/updateDropdown'
import updateUserInputs from '../../../functions/forms/updateUserInputs'
import axios from 'axios'
import qs from 'qs'
import { siteData } from '../../templates/Layout'
import LocationsDropdown from '../shared/LocationsDropdown'
import * as Yup from 'yup'
import { FaAsterisk } from 'react-icons/fa'
import SignUpSuccess from './SignUpSuccess'
import FormFailed from '../shared/FormFailed'
import FormSubmitting from '../shared/FormSubmitting'
import EmailInput from '../shared/EmailInput'
import ConsentMsg from '../../forms/shared/ConsentMsg'
import { WebToLeadLink } from '../../../constants/constants'

const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email!').required('Email is required!')
})

function SignUpForm({setShowHeader}) {
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
      url: WebToLeadLink,
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
      setShowHeader(false)
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
    {// This way we can get access to all formik props
      formik => {
        return (
          <Form className="w-100" >
            { submitting ? <FormSubmitting /> : leadSuccess ? <SignUpSuccess /> : signupFailed ? <FormFailed />
            : <>
            <div className="row">
                <div>
                  <EmailInput formik={formik} />
                </div>
                {
                  siteData.multiple &&
                  <div className="mt-3">
                    <label htmlFor="00N1L00000F9eBV">Location <sup><FaAsterisk /></sup></label>
                    <select
                      value={formState.store.salesforceValue} onChange={ event => dropdownHandler(event.target.value) }
                      className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                      <LocationsDropdown />
                    </select>
                  </div>
                }
            </div>
            <div className="row mt-1">
              <div className="col-12 mb-3">
                <p className="text-center mt-2 mb-0 consent-msg"><ConsentMsg /></p>
              </div>
              <div className="col-12 text-center">
                <button
                  className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit" 
                  disabled={!formik.isValid}>SUBMIT</button>
              </div>
            </div>
            </>
           }
          </Form>
        )
      }
    }

  </Formik>
  )
}

export default SignUpForm
