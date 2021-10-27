import React, {useState} from 'react'
import { Link } from 'gatsby'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextError from '../shared/TextError'
import SubscriptionBox from '../shared/SubscriptionBox'
import getStore from '../../../functions/general/getStore'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import updateSubscription from '../../../functions/forms/updateSubscription'
import formData from '../../../data/formData.json'
import updateDropdown from '../../../functions/forms/updateDropdown'
import updateUserInputs from '../../../functions/forms/updateUserInputs'
import axios from 'axios'
import qs from 'qs'
import { siteData, city } from '../../layout/Layout'
import validateEmail from '../shared/validateEmail'
import LocationsDropdown from '../shared/LocationsDropdown'
import faqsFormSchema from './faqsFormSchema'

function FaqsForm() {
  // if store not selected yet.... 
  // (this is useful when navigating between pages and the location is already selected somewhere else in other forms)
  if(!formData.store.salesforceValue) {
    // Whether it's a single location city or multiple, 
    // getStore will return the first element of the city locations array
    let store = getStore(city.locations[0].salesforceValue)

    // Update formData.store
    updateStoreProps(formData, store)
  }

  const [formState, setFormState] = useState(formData)

  const initialValues = {
    first_name: formState.user.first_name,
    email: formState.user.email,
    description: formState.user.description
  }

  // Locations dropdown onChange handler
  const dropdownHandler = salesforceValue => {
    if(salesforceValue === '') return
    else setFormState(updateDropdown(salesforceValue, formState, siteData))
  }

  // Mailchimp checkbox 
  const handleSubscription = () => setFormState(updateSubscription(formState))

  const [submitting, setSubmitting] = useState(false)
  const [leadSuccess, setLeadSuccess] = useState(false)
  const [questionNotSent, setQuestionNotSent] = useState(false)

  const onSubmit = (user) => {

    updateUserInputs(formState, user)
    setSubmitting(true)
    axios({
      method: 'POST',
      url: 'https://cors-milanlaser.herokuapp.com/https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      data: qs.stringify({
        'first_name': formState.user.first_name,
        'last_name': '',
        'description': formState.user.description,
        'email': formState.user.email,
        'updates': formState.user.mailchimp,
        '00N1L00000F9eBV': formState.store.salesforceValue,
        'oid': '00D410000014bPe',
        'lead_source': 'FAQ Submission',
        'retUrl': siteData.origin,
        'Campaign_ID': '7011L000001hWzN'
      }),
      config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    }).then(res => (
      console.log(res.status, 'Question sent to Salesforce'),
      setSubmitting(false),
      setLeadSuccess(true),
      formData.user.description = '' // To clear the description field in other forms across the website
    )).catch((err) => { 
      console.error(err)
      setSubmitting(false)
      setQuestionNotSent(true)
     })
  }

  const askNewQuestionHandler = (formik) => {
    setSubmitting(false)
    setLeadSuccess(false)
    setQuestionNotSent(false)
    formik.setFieldValue('description', 'Ask a new question')
  }
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={faqsFormSchema}
    onSubmit={(user) => onSubmit(user)}>
    {// This way we can get access to all formik props
      formik => {
        return (
          <Form className="w-100" >
            { submitting ?
            <center>
              <p className="h3 mb-4">Sending question...</p>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </center>
            : leadSuccess ?
            <center className="px-3 mt-3 success">
              <p className="h1 text-success">SUCCESS!</p>
              <p className="h3 mt-3 mb-3">Your request has been submitted.</p>
              <p className="h5">We will be contacting you shortly with more information. During normal business hours you can expect to hear from us in about 15 minutes.</p>
              <button 
                className="w-100 cta-btn light-btn py-2 shadow-sm" 
                onClick={() => askNewQuestionHandler(formik)}>
                ASK ANOTHER QUESTION
              </button>
            </center>
            : questionNotSent ?
            <div className="alert alert-danger">
              <p>Ruh Roh! Something went wrong. Question not sent. :(</p>
              Click <Link to="/locations/contact/" className="main-blue text-decoration-underline">here</Link> to contact us.
            </div>
            : <>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <Field as="textarea" 
                    className="form-control" placeholder="Your Question" id="description" name="description" 
                    rows={siteData.multiple ? '5' : '3'}
                    style={formik.touched.first_name && formik.errors.first_name ? {borderColor: 'red'} : null} />
                  <ErrorMessage name="description" component={TextError} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <Field 
                    className="form-control" type="text" placeholder="Your Name" id="first_name" name="first_name"
                    style={formik.touched.first_name && formik.errors.first_name ? {borderColor: 'red'} : null} />
                    <ErrorMessage name="first_name" component={TextError} />
                </div>
                <div className="mb-2">
                  <Field 
                    className="form-control" type="email" placeholder="Your Email" 
                    id="email" name="email" validate={validateEmail}
                    style={formik.touched.email && formik.errors.email ? {borderColor: 'red'} : null} /> 
                  <ErrorMessage name="email" component={TextError} />
                </div>
                {
                  siteData.multiple &&
                  <div>
                    <select
                      value={formState.store.salesforceValue} onChange={ event => dropdownHandler(event.target.value) }
                      className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                      <LocationsDropdown />
                    </select>
                  </div>
                }

              </div>
            </div>
            
            <div className="row">
              <div className="d-flex mt-2 mt-md-0">
                <SubscriptionBox formState={formState} handleSubscription={handleSubscription} mailchimpID="mailchimp-faqs" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 text-center">
                <button
                  className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit" 
                  disabled={!formik.isValid}>SEND QUESTION</button>
              </div>
              <div className="col-12">
                <p className="text-center mt-2 mb-0 consent-msg">
                  I consent by electronic signature to be contacted by Milan Laser by live agent, email &amp; automatic telephone dialer for information, offers or advertisements via email/ phone call/ text message at the number &amp; email provided. No purchase necessary.
                </p>
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

export default FaqsForm
