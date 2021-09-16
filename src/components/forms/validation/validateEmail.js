import axios from 'axios'

// Kickbox email verification
const validateEmail = value => {
  if(value) {
    let error
    return axios.get(`https://us-central1-milanlaser-fcb24.cloudfunctions.net/api/kickbox/${value}`)
    .then(response => {
      if(response.data.result !== 'deliverable') {
        error = 'Undeliverable email entered. Please use another email.'
      }
      return error
    })
  }
}

export default validateEmail
