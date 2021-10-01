import React from 'react'
import validateEmail from './validateEmail'
import { Field, ErrorMessage } from 'formik'
import TextError from '../shared/TextError'
import { FaAsterisk } from 'react-icons/fa'

function EmailInput({formik}) {
  return (
    <>
      <label htmlFor="email">Your Email <sup><FaAsterisk /></sup></label>
      <Field 
        className="form-control" type="email" placeholder="youremail@mailbox.com" 
        id="email" name="email" validate={validateEmail}
        style={formik.touched.email && formik.errors.email ? {borderColor: 'red'} : null} />
      <ErrorMessage name="email" component={TextError} />
    </>
  )
}

export default EmailInput
