// This is for the mailchimp checkbox subscription

function updateSubscription(formState) {
  const updatedFormState = { ...formState } // Shallow clone of formState
  updatedFormState.user.mailchimp = !updatedFormState.user.mailchimp
  return updatedFormState
}

export default updateSubscription