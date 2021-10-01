import React from 'react'
import FirstNameInput from '../shared/FirstNameInput'
import LastNameInput from '../shared/LastNameInput'
import PhoneInput from '../shared/PhoneInput'
import EmailInput from '../shared/EmailInput'
import TextArea from '../shared/TextArea'
import SubscriptionBox from '../shared/SubscriptionBox'

// For Consultation Forms Only
function UserInputs({ formik, formState, askQuestionClicked, handleSubscription }) {
  return (
    <div className="form-inputs-wrapper">
      <div className="row justify-content-center mx-auto pt-4 mb-md-3">
        <div className="col-md-5">
          <FirstNameInput formik={formik} />
        </div>
        <div className="col-md-5">
          <LastNameInput formik={formik} />
        </div>
      </div>
      
      <div id="scrollToMessage" className="row justify-content-center mx-auto pt-md-4 mb-md-3">
        <div className="col-md-5 mt-3 mt-sm-0">
          <PhoneInput />
        </div>
    
        <div className="col-md-5 my-3 my-sm-0">
          <EmailInput formik={formik} />
        </div>
      </div>

      <div className="row justify-content-center mx-auto">
        <div className="col-md-10 p-md-0">
          <hr className="w-100 mb-0"/>
        </div>
      </div>

      <div className="row justify-content-center mx-auto mt-3 overflow-hidden">
        <div id="msg_area" className={`col-md-10 mx-auto mb-2 ${askQuestionClicked ? 'slide-down' : ''}`}>
          <TextArea />
        </div>
      </div>

      <div className="row justify-content-center mx-auto">
        <div className="col-md-10 custom-checkbox">
          <SubscriptionBox formState={formState} handleSubscription={handleSubscription} />
        </div>
      </div>
    </div>
  )
}

export default UserInputs
