function goBackBtn(formState) {
  const updatedFormState = { ...formState } // Shallow clone of formState

  // Reset form action
  updatedFormState.include.action = ''

  return updatedFormState
}

export default goBackBtn
