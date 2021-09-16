// This is for the mailchimp checkbox subscription

function updateSubscription(event, formState) {
  const { id } = event.target
  const updatedFormState = { ...formState } // Shallow clone of formState
  updatedFormState.user[id] = !updatedFormState.user[id]
  return updatedFormState
}

export default updateSubscription