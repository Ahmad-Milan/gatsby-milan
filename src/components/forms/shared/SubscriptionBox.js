import React from 'react'

function SubscriptionBox({formState, handleSubscription}) {
  return (
    <>
      <input 
        className="me-2 form-check-input" type="checkbox" id="mailchimp"  name="updates" 
        checked={formState.user.mailchimp} onChange={(event) => handleSubscription(event)}/>
      <label className="main-blue mailchimp" htmlFor="mailchimp"><small>Get updates on laser hair removal deals. (no spam)</small></label>
    </>
  )
}

export default SubscriptionBox
