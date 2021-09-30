import React, {useState, useRef} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextError from '../shared/TextError'
import validateEmail from '../validation/validateEmail'
import InputMask from 'react-input-mask'
import { FaAsterisk } from 'react-icons/fa'
import getStore from '../../../functions/general/getStore'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import updateSubscription from '../../../functions/forms/updateSubscription'
import formData from '../../../data/formData.json'
import updateDropdown from '../../../functions/forms/updateDropdown'
import updateUserInputs from '../../../functions/forms/updateUserInputs'
import LocationsDropdown from '../shared/LocationsDropdown'
import * as Yup from 'yup'


const contactSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required!'),
  email: Yup.string().email('Enter a valid email!').required('Email is required!'),
  phone: Yup.string().min(15, 'Enter valid phone number!').required('Phone number is required!'),
  description: Yup.string()
})
function Contact({siteData, city}) {

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
  const formRef = useRef(null)

  const initialValues = {
    first_name: formState.user.first_name,
    phone: formState.user.phone,
    email: formState.user.email,
    description: formState.user.description
  }

  // Locations dropdown onChange handler
  const dropdownHandler = salesforceValue => setFormState(updateDropdown(salesforceValue, formState, siteData))

  // Mailchimp checkbox 
  const handleSubscription = event => setFormState(updateSubscription(event, formState))

  const onSubmit = (user, formRef) => {
    updateUserInputs(formState, user)
    // formRef.current.submit()
    console.log(formState)
  }

  return (
        <Formik 
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={(user) => onSubmit(user, formRef)}>
          {// This way we can get access to all formik props
          formik => {
            return (
              <Form 
                className="w-100 pb-4" ref={formRef} method="POST"
                action="https://cors-milanlaser.herokuapp.com/https://go.milanlaser.com/l/642813/2018-12-05/h652">
                <input type="hidden" name="oid" value="00D410000014bPe" />
                <input type="hidden" name="retURL" value={`${siteData.origin}/form/processing.html`} />
                <input className="lead_source" type="hidden" name="lead_source"  id="lead_source" value="Website" />

                <div className="row justify-content-center mx-auto pt-md-2">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="first_name">Your Name <sup><FaAsterisk /></sup></label>
                    <Field className="form-control" type="text" placeholder="Mila N. Laser" id="first_name" name="first_name"
                    style={formik.touched.first_name && formik.errors.first_name ? {borderColor: 'red'} : null} />
                    <ErrorMessage name="first_name" component={TextError} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone">Phone Number <sup><FaAsterisk /></sup></label>
                    <Field name="phone" >
                      { // These props are coming from the Formik Field compoenent and it contains: field, form, meta
                        props => {
                          const { field, meta } = props
                          return <>
                              <InputMask mask="+1\ 999-999-9999" maskChar={null} className="form-control phone_input" id="phone" 
                                {...field} placeholder="+1 999-999-9999"
                                style={meta.touched && meta.error ? {borderColor: 'red'} : null} /> 
                                {meta.touched && meta.error ? <ErrorMessage name="phone" component={TextError} /> : null}
                            </>
                        }
                      }
                    </Field>
                  </div>
                </div>
                
                <div className="row justify-content-center mx-auto">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">Your Email <sup><FaAsterisk /></sup></label>
                    <Field 
                      className="form-control" type="email" placeholder="youremail@mailbox.com" 
                      id="email" name="email" validate={validateEmail}
                      style={formik.touched.email && formik.errors.email ? {borderColor: 'red'} : null} />
                    <ErrorMessage name="email" component={TextError} />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="00N1L00000F9eBV">Location <sup><FaAsterisk /></sup></label>
                    <select
                      value={formState.store.salesforceValue} onChange={(event) => dropdownHandler(event.target.value)}
                      className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                      <LocationsDropdown />
                    </select>
                  </div>
                </div>

                <div className="row justify-content-center mx-auto overflow-hidden">
                  <div className="mb-2">
                    <label htmlFor="description">Message</label>
                    <Field as="textarea" className="form-control" placeholder="Hello…" id="description" name="description" rows="3"/>
                  </div>
                </div>

                <div className="row justify-content-center mx-auto">
                  <div className="custom-checkbox">
                    <input 
                      className="me-2 form-check-input" type="checkbox" id="mailchimp"  name="updates" 
                      checked={formState.user.mailchimp} onChange={(event) => handleSubscription(event)}/>
                    <label className="main-blue mailchimp" htmlFor="mailchimp"><small>Get updates on laser hair removal deals. (no spam)</small></label>
                  </div>
                </div>



                <div id="actions-btns" className="row justify-content-center mt-4">
                  <div className="col-10 col-lg-6 text-center">
                    <button
                      className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit" 
                      disabled={!formik.isValid}>SUBMIT</button>
                  </div>
                  <p className="text-center mt-3 consent-msg main-blue">I consent by electronic signature to be contacted by Milan Laser by live agent, email &amp; automatic telephone dialer for information, offers or advertisements via email/ phone call/ text message at the number &amp; email provided. No purchase necessary.</p>
                </div>
              </Form>
            )
          }
        }

        </Formik>


  )
}

export default Contact
