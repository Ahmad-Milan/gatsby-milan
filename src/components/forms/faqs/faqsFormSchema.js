import * as Yup from 'yup'

function faqsFormSchema() {
  const schema = Yup.object().shape({
    first_name: Yup.string().required('This field is required!'),
    email: Yup.string().email('Enter a valid email!').required('Email is required!'),
    description: Yup.string().required('This field is required!')
  })
  return schema
}

export default faqsFormSchema