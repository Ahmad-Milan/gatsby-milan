import * as Yup from 'yup'

function validationSchema() {
  const schema = Yup.object().shape({
    first_name: Yup.string().required('This field is required!'),
    email: Yup.string().email('Enter a valid email!').required('Email is required!'),
    phone: Yup.string().min(15, 'Enter valid phone number!').required('Phone number is required!'),
    description: Yup.string()
  })
  return schema
}

export default validationSchema
