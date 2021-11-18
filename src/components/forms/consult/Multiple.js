import React, {useState, useRef} from 'react'
import { Link } from 'gatsby'
import { FaQuestionCircle, FaRegCalendarAlt, FaArrowLeft, FaPaperPlane, FaArrowRight } from 'react-icons/fa'
import formData from '../../../data/formData.json'
import updateNearbySelection  from '../../../functions/forms/updateNearbySelection'
import updateDropdown from '../../../functions/forms/updateDropdown'
import goBackBtn from '../../../functions/forms/goBackBtn'
import updateFormAction from '../../../functions/forms/updateFormAction'
import consultSchema from './consultSchema'
import { Formik, Form } from 'formik'
import updateSubscription from '../../../functions/forms/updateSubscription'
import askQuestion from '../../../functions/forms/askQuestion'
import onSubmit from '../../../functions/forms/onSubmit'
import UserInputs from './UserInputs'
import LocationsDropdown from '../shared/LocationsDropdown'
import NearbyLocations from '../shared/NearbyLocations'
import ShowAddressOrLink from '../shared/ShowAddressOrLink'
import { FORM_ACTION_MAIN_LINK } from '../../../constants/constants'
import './Consult.css'


// ******************************************************** //
// This form works ONLY for websites with MULTIPLE locations
// ******************************************************** //
function Multiple({siteData}) {
  const [formState, setFormState] = useState(formData)

  const formRef = useRef(null)
  const succesRef = useRef(null)

  // Check if the current action is 'question'
  // This is usefull when navigating between site's pages
  const isQuestion = formState.include.action === 'question' // Boolean
  const [askQuestionClicked, setAskQuestionClicked] = useState(isQuestion)

  // Mailchimp checkbox 
  const handleSubscription =() => setFormState(updateSubscription(formState))

  // This is the list of nearby locations (NOT the Dropdown) / click handler
  const nearbySelectedHandler = store => setFormState(updateNearbySelection(store, formState, siteData))

  // Locations dropdown onChange handler
  const dropdownHandler = salesforceValue => {
    if(salesforceValue === '') return
    else setFormState(updateDropdown(salesforceValue, formState, siteData))
  }

  // Go Back Button
  const handleGoBack = () => setFormState(goBackBtn(formState))

  // Action: 'question' OR 'self_schedule'
  const actionHandler = (action, formikProps) => setFormState(updateFormAction(action, formikProps, formState))

  return (
    <div id="consult-form" className="full-section">
      <div className="container">
        <div className="d-flex flex-column">
          <h2 className="text-center text-white subhead-sm consult-h2">Book Your Free Consult</h2>
          <p className="text-center light-blue">Not ready for a consultation? <Link to="/locations/contact/" className="ask_q light-blue">Feel free to ask a question.</Link></p>
        </div>
        <Formik 
          initialValues={formState.user}
          validationSchema={consultSchema}
          onSubmit={() => onSubmit(formState, siteData, formRef, succesRef)}>
          {// This way we can get access to all formik props
          formik => {
            return (
              <Form 
                className="w-100 py-4 rounded shadow" ref={formRef} method="POST"
                action={`${FORM_ACTION_MAIN_LINK}`}>
                <input type="hidden" name="oid" value="00D410000014bPe" />
                <input id="success" type="hidden" name="retURL" ref={succesRef} value="" />
                <input className="lead_source" type="hidden" name="lead_source"  id="lead_source" value={formState.include.leadsource} />
                <input type="hidden" name="Campaign_ID" id="campaign" value={formState.include.campaignId} />
    
                <div className="form-steps-container position-relative overflow-hidden">
    
                  <UserInputs 
                    formik={formik}
                    formState={formState}
                    askQuestionClicked={askQuestionClicked}
                    handleSubscription={handleSubscription} />

                  <div className="locations-container">
                    <div className={`locations-wrapper mx-2 ${formState.include.action !== '' ? 'toggle' : ''}`}>
                      <div className="row justify-content-center mx-auto pt-4">
                        <div className="col-md-10">
                          <h3 className="h5 mb-4 text-center">Select a Location Near You</h3>
                          <ul className="d-flex justify-content-center flex-wrap">
                            <NearbyLocations siteData={siteData} nearbySelectedHandler={nearbySelectedHandler} />
                          </ul>
                        </div>
                      </div>

                      <div id="locations-dropdown" className="row justify-content-center mx-auto my-3">
                        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                          <h4 className="h6 text-center">Or select a location from the list</h4>
                          <select
                            value={formState.store.salesforceValue} onChange={(event) => dropdownHandler(event.target.value)}
                            className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                            <LocationsDropdown />
                          </select>
                        </div>
                      </div>

                      <div className="row justify-content-center mx-auto selected-location-container">
                        <div className={`col-md-10 selected-location-wrapper ${formState.store.salesforceValue !== '' ? 'toggle' : ''}`}>
                          <div className="mb-0 text-center">
                            { (formState.store.open || formState.include.action === 'question') &&  <ShowAddressOrLink formState={formState} siteData={siteData} />  }
                            {
                            !formState.store.open && formState.include.action !== 'question' &&
                            <div className="d-flex justify-content-center mb-3">
                              <div className="alert alert-warning col text-center p-2 mb-0" role="alert">
                                Selected location is not open yet, but you can still 
                                <span onClick={
                                    () => {
                                      askQuestion(formik, formState)
                                      setAskQuestionClicked(true)
                                      actionHandler('question', formik)
                                    }
                                }>&nbsp;submit a question</span>! Or select a different location.
                              </div>
                            </div>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div id="actions-btns" className="row justify-content-center my-3 col-lg-10 m-auto">
                  <div className="col-lg-4 text-center">
                  { // When Ask A Question button is NOT clicked
                    !askQuestionClicked ?
                    <>
                    {
                      formState.include.action !== 'self_schedule' &&
                      <button 
                        className="w-100 cta-btn light-btn py-2 shadow-sm"
                        onClick={(event) => {askQuestion(event, formik, formState); setAskQuestionClicked(true)}}>
                        <i><FaQuestionCircle /></i><span className="ps-2">ASK A QUESTION</span>
                      </button>
                    }
                    {
                      formState.include.action === 'self_schedule' &&
                      <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => handleGoBack()}>
                        <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
                      </button>
                    }
                    </>
                    : // When Ask A Question button is clicked
                    <>
                    {
                      formState.include.action === '' &&
                      <button 
                        className="w-100 cta-btn navy-bg-btn py-2 shadow-sm text-white" 
                        onClick={() => actionHandler('question', formik)}
                        disabled={!formik.isValid}>
                        <span className="pe-2">NEXT</span><i><FaArrowRight /></i>
                      </button>
                    }
                    {
                      formState.include.action === 'question' &&
                      <button 
                        className="w-100 cta-btn navy-bg-btn py-2 shadow-sm text-white" type="submit"
                        disabled={formState.store.salesforceValue === '' || !formik.isValid ? true : false}>
                        <i><FaPaperPlane /></i><span className="ps-2">SEND QUESTION</span>
                      </button>
                    }
                    </>
                  }
                  </div>
                  
                  <div className="col-lg-2 text-center"><div className="my-3 my-md-2">OR</div></div>
                  
                  <div className="col-lg-4 text-center">
                  { // When Ask A Question button is NOT clicked
                    !askQuestionClicked &&
                    <>
                    {
                      formState.include.action !== 'self_schedule' &&
                      <button 
                        className="w-100 cta-btn red-bg-btn py-2 shadow-sm" 
                        onClick={() => actionHandler('self_schedule', formik)}>
                      <i><FaRegCalendarAlt /></i><span className="ps-2">SEE AVAILABLE TIMES</span>
                      </button>
                    }
                    {
                      formState.include.action === 'self_schedule' &&
                      <button 
                        className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit"
                        disabled={!formState.store.open || !formik.isValid ? true : false}>
                      <i><FaRegCalendarAlt /></i><span className="ps-2">SEE AVAILABLE TIMES</span>
                      </button>
                    }
                    </>
                  }
                  { // When Ask A Question button is clicked
                    askQuestionClicked && formState.include.action === '' &&
                    <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => setAskQuestionClicked(false)}>
                      <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
                    </button>
                  }
                  {
                    formState.include.action === 'question' &&
                    <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => handleGoBack()}>
                      <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
                    </button>
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

export default Multiple