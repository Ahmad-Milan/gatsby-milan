import * as Yup from 'yup'

function consultSchema() {
  const schema = Yup.object().shape({
    first_name: Yup.string().required('This field is required!'),
    last_name: Yup.string().required('Last name is required!'),
    email: Yup.string().email('Enter a valid email!').required('Email is required!'),
    phone: Yup.string().min(15, 'Enter valid phone number!').required('Phone number is required!'),
  })
  return schema
}

export default consultSchema

