function actionInit(formikProps)  {
  // Set all fields to touched just in case a user hits
  // 'Ask a Question' OR 'See Available Times' Buttons
  // before touching the fields
  formikProps.setTouched({
    first_name: true,
    last_name: true,
    email: true,
    phone: true
  })
  // Validate the above form fields
  formikProps.validateForm()
}

export default actionInit
