import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FaQuestionCircle, FaRegCalendarAlt, FaArrowLeft, FaPaperPlane, FaStoreAlt } from 'react-icons/fa'
import { BiWebcam } from 'react-icons/bi'
import formData from '../../../data/formData.json'
import getStore from '../../../functions/general/getStore'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import updateConsultType from '../../../functions/forms/updateConsultType'
import goBackBtn from '../../../functions/forms/goBackBtn'
import updateFormAction from '../../../functions/forms/updateFormAction'
import validationSchema from '../validation/validationSchema'
import { Formik, Form } from 'formik'
import updateSubscription from '../../../functions/forms/updateSubscription'
import askQuestion from '../../../functions/forms/askQuestion'
import onSubmit from '../../../functions/forms/onSubmit'
import UserInputs from './UserInputs'
import './Consult.css'

// This form works ONLY for websites with Single location
// This form supports the virtual consult option

function Single({siteData}) {

  // getStore takes the salesforce value as a parameter
  const currentStore = getStore(siteData.salesforce)
  const [formState, setFormState] = useState(formData)

  // Update formState.store props 
  // Get the values from currentStore
  updateStoreProps(formState, currentStore)

  // Check if the current action is 'question'
  // This is usefull when navigating between site's pages
  const isQuestion = formState.include.action === 'question' // Boolean
  const [askQuestionClicked, setAskQuestionClicked] = useState(isQuestion)

  // Mailchimp checkbox 
  const handleSubscription = event => setFormState(updateSubscription(event, formState))

  // Consult Type: 'Virtual' OR 'Consult'
  const handleConsultTypeClick = type => setFormState(updateConsultType(type, formState))

  // Go Back Button
  const handleGoBack = () => setFormState(goBackBtn(formState))

  // Action: 'question' OR 'self_schedule'
  const actionHandler = (action, formikProps) => setFormState(updateFormAction(action, formikProps, formState))

  return (
    <div id="consult-form" className="full-section">
      <div className="container">
        <div className="d-flex flex-column">
          <h2 className="text-center text-white subhead-sm consult-h2">Book Your Free Consult</h2>
          <p className="text-center light-blue">Not ready for a consultation? <Link to="/contact/" className="ask_q light-blue">Feel free to ask a question.</Link></p>
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
                    askQuestionClicked={askQuestionClicked}
                    handleSubscription={handleSubscription} />


                  <div className="consult-type-container">
                    <div className={`consult-type-wrapper ${formState.include.action === 'self_schedule' && formState.store.open ? formState.store.virtual && 'toggle' : ''}`}>
                      <div className="row justify-content-center mx-auto">
                        <div className="col-md-10 p-md-0">
                          <hr className="w-100 mb-0"/>
                        </div>
                      </div>

                      <div className="row justify-content-center mx-auto py-4">
                        <div className="col-md-10">
                          <h3 className="h5 text-center">Select Consultation Type</h3>
                          {
                            !formState.store.virtual &&
                            <div className="d-flex justify-content-center pt-2">
                              <div className="alert alert-warning col col-sm-10 col-md-8 col-lg-6 text-center p-2 mb-0" role="alert">
                                Virtual consult is not available for this location
                              </div>
                            </div>
                          }
                          <div className="d-flex justify-content-center mt-4">
                            <div className="col-5 col-md-4 col-lg-3">
                              <div 
                                className={`card p-3 text-center ${ formState.include.consultType === 'Consult' ? 'selected' : 'shadow-sm'}`} 
                                onClick={() => handleConsultTypeClick('Consult')}>
                                <span><FaStoreAlt /></span>
                                <p className="mt-2 mb-0">In-Store</p>
                              </div>
                            </div>

                            <div className="col-5 col-md-4 col-lg-3">
                              <div 
                                className={`card p-3 text-center ${ formState.include.consultType === 'Virtual' ? 'selected' : 'shadow-sm'}`}
                                style={!formState.store.virtual ? {color: 'lightgrey'} : {} }
                                onClick={() => handleConsultTypeClick('Virtual')}>
                                <span><BiWebcam /></span>
                                <p className="mt-2 mb-0">Virtual</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div id="actions-btns" className="row justify-content-center my-3 col-lg-10 m-auto">
                  <div className="col-lg-4 text-center">
                  {/* If store has virtual consult option */}
                  {
                    formState.store.virtual &&
                    <>
                    { // if Ask a Question button NOT clicked
                      !askQuestionClicked &&
                      <>
                      {
                        formState.include.action !== 'self_schedule' &&
                        <button 
                          className="w-100 cta-btn light-btn py-2 shadow-sm" 
                          onClick={() => {askQuestion(formik, formState); setAskQuestionClicked(true)}}>
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
                    }
                    { // if Ask a Question button clicked
                      askQuestionClicked && formState.include.action !== 'self_schedule' &&
                      <button 
                        className="w-100 cta-btn navy-bg-btn py-2 shadow-sm text-white" type="submit"
                        onClick={() => actionHandler('question', formik)}
                        disabled={!formik.isValid ? true : false}>
                        <i><FaPaperPlane /></i><span className="ps-2">SEND QUESTION</span>
                      </button>
                    }
                    </>
                  }

                  {/* If store does NOT have virtual consult option */}
                  {
                    !formState.store.virtual &&
                    <>
                    { // if Ask a Question button NOT clicked
                      !askQuestionClicked &&
                      <button 
                        className="w-100 cta-btn light-btn py-2 shadow-sm" 
                        onClick={() => {askQuestion(formik, formState); setAskQuestionClicked(true)}}>
                        <i><FaQuestionCircle /></i><span className="ps-2">ASK A QUESTION</span>
                      </button>
                    }
                    { // if Ask a Question button clicked
                      askQuestionClicked &&
                      <button 
                        className="w-100 cta-btn navy-bg-btn py-2 shadow-sm text-white" type="submit"
                        onClick={() => actionHandler('question', formik)}
                        disabled={!formik.isValid ? true : false}>
                        <i><FaPaperPlane /></i><span className="ps-2">SEND QUESTION</span>
                      </button>
                    }
                    </>
                  }
                  </div>
                  
                  <div className="col-lg-2 text-center"><div className="my-3 my-md-2">OR</div></div>
                  
                  <div className="col-lg-4 text-center">
                  {/* If store has virtual consult option */}
                  {
                    formState.store.virtual &&
                    <>
                    { // if Ask a Question button NOT clicked
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
                          disabled={formState.include.consultType === '' || !formState.store.open || !formik.isValid ? true : false}>
                        <i><FaRegCalendarAlt /></i><span className="ps-2">SEE AVAILABLE TIMES</span>
                        </button>
                      }
                      </>
                    }
                    { // if Ask a Question button clicked
                      askQuestionClicked && formState.include.action !== 'self_schedule' &&
                      <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => {handleGoBack(); setAskQuestionClicked(false)}}>
                        <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
                      </button>
                    }
                    </>
                  }

                  {/* If store does NOT have virtual consult option */}
                  {
                    !formState.store.virtual &&
                    <>
                    { // if Ask a Question button NOT clicked
                      !askQuestionClicked && formState.include.action !== 'question' &&
                      <button 
                        className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit"
                        onClick={() => actionHandler('self_schedule', formik)}
                        disabled={!formik.isValid ? true : false}>
                      <i><FaRegCalendarAlt /></i><span className="ps-2">SEE AVAILABLE TIMES</span>
                      </button>
                    }
                    { // if Ask a Question button clicked
                      askQuestionClicked &&
                      <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => {handleGoBack(); setAskQuestionClicked(false)}}>
                        <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
                      </button>
                    }
                    </>
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

export default Single