import React from 'react'

function SubscriptionBox({formState, handleSubscription, mailchimpID}) {
  return (
    <>
      <input 
        className="me-2 form-check-input" type="checkbox" id={mailchimpID}  name="updates" 
        checked={formState.user.mailchimp} onChange={(event) => handleSubscription(event)}/>
      <label className="main-blue mailchimp" htmlFor={mailchimpID}><small>Get updates on laser hair removal deals. (no spam)</small></label>
    </>
  )
}

export default SubscriptionBox
