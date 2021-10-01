import React from 'react'
import { Field } from 'formik'

function TextArea() {
  return (
    <>
      <label htmlFor="description">Message</label>
      <Field as="textarea" className="form-control" placeholder="Hello…" id="description" name="description" rows="3"/>
    </>
  )
}

export default TextArea
