import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../shared/TextError'
import { FaAsterisk } from 'react-icons/fa'

function FirstNameInput({formik}) {
  return (
    <>
      <label htmlFor="first_name">First Name <sup><FaAsterisk /></sup></label>
      <Field className="form-control" type="text" placeholder="First Name" id="first_name" name="first_name"
      style={formik.touched.first_name && formik.errors.first_name ? {borderColor: 'red'} : null} />
      <ErrorMessage name="first_name" component={TextError} />
    </>
  )
}

export default FirstNameInput
