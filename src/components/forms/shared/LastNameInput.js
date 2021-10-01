import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../shared/TextError'
import { FaAsterisk } from 'react-icons/fa'

function LastNameInput({formik}) {
  return (
    <>
      <label htmlFor="last_name">Last Name <sup><FaAsterisk /></sup></label>
      <Field className="form-control" type="text" placeholder="Last Name" id="last_name" name="last_name"
      style={formik.touched.last_name && formik.errors.last_name ? {borderColor: 'red'} : null} />
      <ErrorMessage name="last_name" component={TextError} />
    </>
  )
}

export default LastNameInput