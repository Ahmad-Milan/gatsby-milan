import scrollTo from 'gatsby-plugin-smoothscroll'

function checkTouched(formikProps, action) {
  const { touched } = formikProps
  if(!(touched.first_name || touched.last_name || touched.phone || touched.email) || !formikProps.isValid) {
    scrollTo('#consult-form')
  }
  // if the user fields are touched && form is valid && action is 'question'
  else if(action === 'question' && formikProps.values.description === '') {
    scrollTo('#scrollToMessage')
  }
  // Note: if action is 'self_schedule' and valid -> don't do anything
}

export default checkTouched