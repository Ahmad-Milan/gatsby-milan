import React, {useState, useRef} from 'react'
import { Link } from 'gatsby'
import { FaQuestionCircle, FaRegCalendarAlt, FaArrowLeft, FaPaperPlane } from 'react-icons/fa'
import formData from '../../../data/formData.json'
import getStore from '../../../functions/general/getStore'
import updateStoreProps from '../../../functions/forms/updateStoreProps'
import goBackBtn from '../../../functions/forms/goBackBtn'
import updateFormAction from '../../../functions/forms/updateFormAction'
import consultSchema from './consultSchema'
import { Formik, Form } from 'formik'
import updateSubscription from '../../../functions/forms/updateSubscription'
import askQuestion from '../../../functions/forms/askQuestion'
import onSubmit from '../../../functions/forms/onSubmit'
import UserInputs from './UserInputs'
import './Consult.css'
// ******************************************************** //
// This form works ONLY for websites with SINGLE location
// ******************************************************** //
function Single({siteData}) {

  // getStore takes the salesforce value as a parameter
  const currentStore = getStore(siteData.salesforceValue)
  const [formState, setFormState] = useState(formData)

  const formRef = useRef(null)
  const succesRef = useRef(null)

  // Update formState.store props 
  // Get the values from currentStore
  updateStoreProps(formState, currentStore)

  // Check if the current action is 'question'
  // This is usefull when navigating between site's pages
  const isQuestion = formState.include.action === 'question' // Boolean
  const [askQuestionClicked, setAskQuestionClicked] = useState(isQuestion)

  // Mailchimp checkbox 
  const handleSubscription =() => setFormState(updateSubscription(formState))

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
          validationSchema={consultSchema}
          onSubmit={() => onSubmit(formState, siteData, formRef, succesRef)}>
          {// This way we can get access to all formik props
          formik => {
            return (
              <Form 
                className="w-100 py-4 rounded shadow" ref={formRef} method="POST"
                action="https://cors-milanlaser.herokuapp.com/https://go.milanlaser.com/l/642813/2018-12-05/h64s">
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
                  
                </div>

                {/* Location */}
                <input 
                  type="text" defaultValue={formState.store.salesforceValue} zip={formState.store.zipcode}
                  className="d-none" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location" />

                <div id="actions-btns" className="row justify-content-center my-3 col-lg-10 m-auto">
                  <div className="col-lg-4 text-center">
                  { 
                    !askQuestionClicked ?
                    <button 
                      className="w-100 cta-btn light-btn py-2 shadow-sm" 
                      onClick={() => {askQuestion(formik, formState); setAskQuestionClicked(true)}}>
                      <i><FaQuestionCircle /></i><span className="ps-2">ASK A QUESTION</span>
                    </button>
                    :
                    <button 
                      className="w-100 cta-btn navy-bg-btn py-2 shadow-sm text-white"
                      onClick={() => actionHandler('question', formik)}
                      disabled={!formik.isValid ? true : false} type="submit">
                      <i><FaPaperPlane /></i><span className="ps-2">SEND QUESTION</span>
                    </button>
                  }
                  </div>
                  
                  <div className="col-lg-2 text-center"><div className="my-3 my-md-2">OR</div></div>
                  
                  <div className="col-lg-4 text-center">
                  { 
                    !askQuestionClicked ?
                    <button 
                      className="w-100 cta-btn red-bg-btn py-2 shadow-sm" 
                      onClick={() => actionHandler('self_schedule', formik)}
                      disabled={!formik.isValid ? true : false} type="submit">
                      <i><FaRegCalendarAlt /></i><span className="ps-2">SEE AVAILABLE TIMES</span>
                    </button>
                    :
                    <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => {handleGoBack(); setAskQuestionClicked(false)}}>
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

export default Single