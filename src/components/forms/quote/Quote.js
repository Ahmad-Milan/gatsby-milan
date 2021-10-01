import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import getStore from '../../../functions/general/getStore'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import formData from '../../../data/formData.json'
import updateDropdown from '../../../functions/forms/updateDropdown'
import updateUserInputs from '../../../functions/forms/updateUserInputs'
import quoteSchema from './quoteSchema'
import axios from 'axios'
import qs from 'qs'
import { siteData, city } from '../../layout/Layout'
import './Quote.css'
import PhoneInput from '../shared/PhoneInput'
import EmailInput from '../shared/EmailInput'
import FullNameInput from '../shared/FullNameInput'
import SelectLocation from '../shared/SelectLocation'

function Quote({scrollTop}) {

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
    phone: formState.user.phone,
    email: formState.user.email
  }

  // Locations dropdown onChange handler
  const dropdownHandler = salesforceValue => setFormState(updateDropdown(salesforceValue, formState, siteData))

  const [areas, setAreas] = useState({ 
    brazilian: false,
    upper_lip: false,
    face_neck: false,
    back: false,
    underarm: false,
    chin: false,
    legs: false,
    chest: false
  });
  // areasFinal is the string that will be sent to salesforce along with otherAreas
  const [areasFinal, setAreasFinal] = useState('')

  // Checkboxes check/uncheck
  const handleArea = (e) => {
    setAreas({ ...areas, [e.target.name]: e.target.checked });
    e.target.checked ? setAreasFinal(areasFinal.concat(e.target.value + ', ')) : setAreasFinal(areasFinal.replace(e.target.value + ', ', ''))
  }

  const checkAreasNumber = () => Object.values(areas).reduce((acc, area) => acc + area, 0) // only counts when area is true
  // For other areas input field
  const [otherAreas, setOtherAreas] = useState('')

  const [submitting, setSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const onSubmit = (user) => {
    updateUserInputs(formState, user)
    scrollTop()
    setSubmitting(true)
    axios({
      method: 'POST', url: 'https://cors-milanlaser.herokuapp.com/https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      data: qs.stringify({
          'first_name': formState.user.first_name,
          'last_name': '',
          'email': formState.user.email,
          'mobile': formState.user.phone,
          '00N1L00000F9eBV': formState.store.salesforceValue,
          'oid': '00D410000014bPe',
          'lead_source': 'Website',
          'description': `Instant Estimate: ${areasFinal}   ${otherAreas}`,
          'retUrl': siteData.origin,
          'Campaign_ID': '70141000000TgDG'
      }),
      config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    }).then(res =>
          console.log(res.status, 'lead created'),
          axios({
              method: 'POST',
              url: 'https://milanlaser.com/gatsby/quote.php',
              data: qs.stringify({
                  'name': formState.user.first_name,
                  'email': formState.user.email,
                  'tel': formState.user.phone,
                  'location': formState.store.salesforceValue,
                  'areas': `${areasFinal}   ${otherAreas}`,
                  'city': siteData.city
              })
          }).then(res =>
            console.log(res),
            setSubmitting(false),
            setLeadSuccess(true)
          ).catch(err => console.error(err))
      )
      .catch((err) => { console.error(err) })
  }

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={quoteSchema}
    onSubmit={(user) => onSubmit(user)}>
    {// This way we can get access to all formik props
      formik => {
        return (
          <Form className="quote-form w-100 pb-4" >
            {submitting ?
            <center>
              <p className="h3 mb-4">Form submitting...</p>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </center>
            : leadSuccess ?
            <center className="px-3 mt-3 success">
              <p className="h1 text-success">SUCCESS!</p>
              <p className="h3 mt-5 mb-3">Your request has been submitted.</p>
              <p className="h5">We will be contacting you shortly with more information. During normal business hours you can expect to hear from us in about 15 minutes.</p>
            </center>
            : <>
            <div className="form-inputs-wrapper">
              <div className="row justify-content-center mx-auto pt-4 mb-md-3">
                <div className="col-md-5">
                  <FullNameInput formik={formik} />
                </div>
                <div className="col-md-5">
                  <PhoneInput />
                </div>
              </div>
              
              <div className="row justify-content-center mx-auto pt-md-4 mb-md-3">
                <div className="col-md-5 my-3 my-sm-0">
                  <EmailInput formik={formik} />
                </div>

                <div className="col-md-5 my-3 my-sm-0">
                  <SelectLocation formState={formState} dropdownHandler={dropdownHandler} />
                </div>
              </div>

              <h3 className="text-center h5 mt-3 mt-sm-4 mt-lg-5">Please select up to 3 areas you’re interested in.</h3>
              <div className="row justify-content-center mt-4 pt-1 checkboxes">
                <div className="col-sm-10 row">
                  <div className="col-6 col-lg-3" >
                    <label htmlFor="brazilian" className="area_label">Brazilian
                      <input type="checkbox" checked={areas.brazilian} onChange={handleArea} disabled={!areas.brazilian && checkAreasNumber() === 3} name="brazilian" value="Brazilian" id="brazilian" />
                      <span className="checkmark"></span> </label>
                    <label className="area_label">Underarm
                      <input type="checkbox" checked={areas.underarm} onChange={handleArea} disabled={!areas.underarm && checkAreasNumber() === 3} name="underarm" value="Underarm" id="underarm" />
                      <span className="checkmark"></span> </label>
                  </div>
                  <div className="col-6 col-lg-3" >
                    <label htmlFor="upper_lip" className="area_label">Upper Lip
                      <input type="checkbox" checked={areas.upper_lip} onChange={handleArea} disabled={!areas.upper_lip && checkAreasNumber() === 3} name="upper_lip" value="Upper Lip" id="upper_lip" />
                      <span className="checkmark"></span> </label>
                    <label htmlFor="chin" className="area_label">Chin
                      <input type="checkbox" checked={areas.chin} onChange={handleArea} disabled={!areas.chin && checkAreasNumber() === 3} name="chin" value="Chin" id="chin" />
                      <span className="checkmark"></span> </label>
                  </div>
                  <div className="col-6 col-lg-4" >
                    <label htmlFor="face_neck" className="area_label">Full Face &amp; Neck
                      <input type="checkbox" checked={areas.face_neck} onChange={handleArea} disabled={!areas.face_neck && checkAreasNumber() === 3} name="face_neck" value="Face &amp; Neck" id="face_neck" />
                      <span className="checkmark"></span> </label>
                    <label htmlFor="legs" className="area_label">Legs
                      <input type="checkbox" checked={areas.legs} onChange={handleArea} disabled={!areas.legs && checkAreasNumber() === 3} name="legs" value="Legs" id="legs" />
                      <span className="checkmark"></span> </label>
                  </div>
                  <div className="col-6 col-lg-2" >
                    <label htmlFor="back" className="area_label">Back
                      <input type="checkbox" checked={areas.back} onChange={handleArea} disabled={!areas.back && checkAreasNumber() === 3}  name="back" value="Back" id="back" />
                      <span className="checkmark"></span> </label>
                    <label htmlFor="chest" className="area_label">Chest
                      <input type="checkbox" checked={areas.chest} onChange={handleArea} disabled={!areas.chest && checkAreasNumber() === 3} name="chest" value="Chest" id="chest" />
                      <span className="checkmark"></span></label>
                  </div>
                </div>

              </div>
              
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 row">
                  <h3 className="h5 text-center">Other Areas <span className="d-none d-md-inline">(we treat almost any area of the body)</span>:</h3>
                  <input 
                    className="form-control" type="text" placeholder="Describe any other areas you're interested in. " id="other_area" name="other_area" 
                    value={otherAreas} onChange={(e) => setOtherAreas(e.target.value)}/>
                </div>
              </div>

            </div>

            <div id="actions-btns" className="row justify-content-center my-3 col-lg-10 m-auto">
              <div className="col-sm-6 col-lg-4 text-center">
                <button
                  className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit" 
                  disabled={!formik.isValid || (areasFinal==='' && otherAreas==='') ? true : false}>REQUEST A QUOTE</button>
              </div>
              <p className="text-center mt-2 mb-0"><small>Terms &amp; Conditions may apply. See store for more details.</small></p>
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

export default Quote
