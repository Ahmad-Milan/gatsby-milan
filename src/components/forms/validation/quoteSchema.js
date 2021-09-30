import * as Yup from 'yup'

function quoteSchema() {
  const schema = Yup.object().shape({
    first_name: Yup.string().required('First name is required!!'),
    email: Yup.string().email('Enter a valid email!').required('Email is required!'),
    phone: Yup.string().min(15, 'Enter valid phone number!').required('Phone number is required!')
  })
  return schema
}

export default quoteSchema