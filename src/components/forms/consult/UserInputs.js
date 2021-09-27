import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../shared/TextError'
import validateEmail from '../validation/validateEmail'
import InputMask from 'react-input-mask'
import { FaAsterisk } from 'react-icons/fa'

// Only for first and last name
function UserInput({formik, text, InputName}) {
  return (
    <div className="col-md-5">
      <label htmlFor={InputName}>{text} <sup><FaAsterisk /></sup></label>
      <Field className="form-control" type="text" placeholder={text} id={InputName} name={InputName}
      style={formik.touched[InputName] && formik.errors[InputName] ? {borderColor: 'red'} : null} />
      <ErrorMessage name={InputName} component={TextError} />
    </div>
  )
}

function UserInputs({ formik, formState, askQuestionClicked, handleSubscription }) {
  return (
    <div className="form-inputs-wrapper">
      <div className="row justify-content-center mx-auto pt-4 mb-md-3">
        <UserInput formik={formik} text="First Name" InputName="first_name" />
        <UserInput formik={formik} text="Last Name" InputName="last_name" />
      </div>
      
      <div id="scrollToMessage" className="row justify-content-center mx-auto pt-md-4 mb-md-3">
        <div className="col-md-5 mt-3 mt-sm-0">
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
    
        <div className="col-md-5 my-3 my-sm-0">
          <label htmlFor="email">Your Email <sup><FaAsterisk /></sup></label>
          <Field 
            className="form-control" type="email" placeholder="youremail@mailbox.com" 
            id="email" name="email" validate={validateEmail}
            style={formik.touched.email && formik.errors.email ? {borderColor: 'red'} : null} />
          <ErrorMessage name="email" component={TextError} />
        </div>
      </div>

      <div className="row justify-content-center mx-auto">
        <div className="col-md-10 p-md-0">
          <hr className="w-100 mb-0"/>
        </div>
      </div>

      <div className="row justify-content-center mx-auto mt-3 overflow-hidden">
        <div id="msg_area" className={`col-md-10 mx-auto mb-2 ${askQuestionClicked ? 'slide-down' : ''}`}>
          <label htmlFor="description">Message</label>
          <Field as="textarea" className="form-control" placeholder="Hello…" id="description" name="description" rows="3"/>
        </div>
      </div>

      <div className="row justify-content-center mx-auto">
        <div className="col-md-10 custom-checkbox">
          <input 
            className="me-2 form-check-input" type="checkbox" id="mailchimp"  name="updates" 
            checked={formState.user.mailchimp} onChange={(event) => handleSubscription(event)}/>
          <label className="main-blue mailchimp" htmlFor="mailchimp"><small>Get updates on laser hair removal deals. (no spam)</small></label>
        </div>
      </div>
    </div>
  )
}

export default UserInputs
