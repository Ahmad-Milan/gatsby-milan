import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import InputMask from 'react-input-mask'
import { FaAsterisk } from 'react-icons/fa'

function PhoneInput() {
  return (
    <>
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
    </>
  )
}

export default PhoneInput
