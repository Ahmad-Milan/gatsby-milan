import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import formData from '../../../data/formData.json'
import stores from '../../../data/stores.json'
import getNearbyLocations from '../../../functions/general/getNearbyLocations'
import updateNearbySelection  from '../../../functions/forms/updateNearbySelection'
import updateDropdown from '../../../functions/forms/updateDropdown'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import updateUserInputs from '../../../functions/forms/updateUserInputs'
import getStore from '../../../functions/general/getStore'
import updateFormAction from '../../../functions/forms/updateFormAction'
import validationSchema from '../validation/validationSchema'
import { Formik, Form } from 'formik'
import updateSubscription from '../../../functions/forms/updateSubscription'
import onSubmit from '../../../functions/forms/onSubmit'
import checkTouched from '../../../functions/forms/checkTouched'
import actionInit from '../../../functions/forms/actionInit'
import UserInputs from './UserInputs'
import './Consult.css'

// This form works ONLY for NON OPEN locations, both Multiple and Single
// This form does NOT support the virtual consult option

function NotOpen({siteData}) {
  const [formState, setFormState] = useState(formData)
  // Check if city has multiple locations
  const isMultiple = getNearbyLocations(siteData).length > 1

  // -------------------Multiple--------------------- //
  // These lines are meant for the First Submit Button
  const [submitClicked, setSubmitClicked] = useState(false)
  useEffect(() => {
    // In case user selects a location, then navigates away
    if(formState.store.location !== '') setSubmitClicked(true)
  }, [submitClicked])
  const handleSubmit = (formikProps) => {
    setSubmitClicked(true)
    actionInit(formikProps)
    checkTouched(formikProps, 'question')
    updateUserInputs(formState, formikProps)
  }

  // This is the list of nearby locations (NOT the Dropdown) / click handler
  const nearbySelectedHandler = store => setFormState(updateNearbySelection(store, formState, siteData))

  // This is the Dropdown all locations list onChange handler
  const dropdownHandler = event => setFormState(updateDropdown(event, formState, siteData))

  // -------------------Single---------------------- //
  if(!isMultiple) {
    // getStore takes the salesforce value as a parameter
    const currentStore = getStore(siteData.salesforce)
    // Update formState.store props 
    // Get the values from currentStore
    updateStoreProps(formState, currentStore)
  }
  // -------------------------------------------------- //
  // Mailchimp checkbox 
  const handleSubscription = event => setFormState(updateSubscription(event, formState))

  // Action: in this form it will only be 'question'
  const actionHandler = (action, formikProps) => setFormState(updateFormAction(action, formikProps, formState))

  return (
    <div id="consult-form" className="full-section">
      <div className="container">
        <div className="d-flex flex-column">
          <h2 className="text-center text-white subhead-sm consult-h2">Get Notified Once We Open</h2>
          <p className="text-center light-blue">Sign up to be notified when this location opens. <br /> 
          <Link to="/contact/" className="ask_q light-blue">Feel free to ask a question.</Link></p>
        </div>
        <Formik 
          initialValues={formState.user}
          validationSchema={validationSchema}
          onSubmit={() => onSubmit(formState)}>
          {// This way we can get access to all formik props
          formik => {
            return (
              <Form className="w-100 py-4 rounded shadow" action="" method="POST" >
                <input type="hidden" name="oid" value="00D410000014bPe" />
                <input id="success" type="hidden" name="retURL" value="" />
                <input className="lead_source" type="hidden" name="lead_source"  id="lead_source" value={formState.include.leadsource} />
                <input type="hidden" name="Campaign_ID" id="campaign" value={formState.include.campaignId} />
    
                <div className="form-steps-container position-relative overflow-hidden">
    
                <UserInputs 
                    formik={formik}
                    formState={formState}
                    askQuestionClicked={true}
                    handleSubscription={handleSubscription} />

                  {
                    isMultiple &&
                    <div className="locations-container">
                      <div className={`locations-wrapper mx-2 ${ submitClicked ? 'toggle' : ''}`}>
                        <div className="row justify-content-center mx-auto pt-4">
                          <div className="col-md-10">
                            <h3 className="h5 mb-4 text-center">Select a Location Near You</h3>
                            <ul className="d-flex justify-content-center flex-wrap">
                              {
                                getNearbyLocations(siteData).map((store, x) => (
                                  <li key={x} className="mb-2 col-6 col-md-4 col-lg-3">
                                    <div
                                      className={`card p-2 text-center ${store.selected === true ? 'selected' : 'shadow-sm'}`} 
                                      onClick={() => nearbySelectedHandler(store)}>{store.location}
                                    </div>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <div id="locations-dropdown" className="row justify-content-center mx-auto my-3">
                          <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                            <h4 className="h6 text-center">Or select a location from the list</h4>
                            <select
                              value={formState.store.salesforceValue} onChange={(event) => dropdownHandler(event)}
                              className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                              <optgroup>
                                <option value="">Select a location</option>
                              </optgroup>
                              {
                                stores.locations.map((item, i) => (
                                  <optgroup key={i} label={item.state}>
                                    {
                                      item.stores.map((elem) => {
                                          let option = elem.locations.map((store, i) => {
                                            return (
                                              <option key={i} value={store.salesforceValue} zip={store.zipcode}>
                                                {store.salesforceValue} {store.open === false ? '/ Coming Soon' : ''}
                                              </option>
                                            )})
                                          return option
                                      })
                                    }
                                  </optgroup>
                                ))
                              }
                            </select>
                          </div>
                        </div>

                        <div className="row justify-content-center mx-auto selected-location-container">
                          <div className={`col-md-10 selected-location-wrapper ${formState.store.salesforceValue !== '' ? 'toggle' : ''}`}>
                            <div className="mb-0 text-center">
                              <strong>Selected location address:</strong>&nbsp;<br className="d-lg-none" />
                              <span className="d-block d-md-inline">
                                {formState.store.address}, <br className="d-sm-none" />
                                {formState.store.locationOnAddress === "same" ? formState.store.location : formState.store.locationOnAddress},&nbsp;
                                {formState.store.stateShort}&nbsp;{formState.store.zipcode}
                              </span>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>

                  }

                </div>

                <div id="actions-btns" className="row justify-content-center my-3 col-lg-10 m-auto">
                  <div className="col-lg-4 text-center">
                    {
                      isMultiple &&
                      <>
                      {
                        !submitClicked &&
                        <button className="w-100 cta-btn red-bg-btn py-2 shadow-sm" onClick={() => handleSubmit(formik)}>SUBMIT</button>
                      }
                      {
                        submitClicked &&
                        <button 
                          className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit"
                          onClick={() => actionHandler('question', formik)}
                          disabled={!formik.isValid ? true : false}>SUBMIT</button>
                      }
                      </>
                    }
                    {
                      !isMultiple &&
                      <button 
                        className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit"
                        onClick={() => actionHandler('question', formik)}
                        disabled={!formik.isValid ? true : false}>SUBMIT</button>
                    }
                  </div>
                </div>
              </Form>
            )
          }
        }

        </Formik>
      </div>
    </div>
  )
}

export default NotOpen