import React from 'react'

function SubscriptionBox({formState, handleSubscription, mailchimpID}) {
  return (
    <>
      <input 
        className="form-check-input mt-0" type="checkbox" id={mailchimpID} name="updates" 
        checked={formState.user.mailchimp} onChange={(event) => handleSubscription(event)}/>
      <label className="main-blue mailchimp ps-2 lh-sm" htmlFor={mailchimpID}><small>Get updates on laser hair removal deals. (no spam)</small></label>
    </>
  )
}

export default SubscriptionBox
