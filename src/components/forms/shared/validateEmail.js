import axios from 'axios'
import { KICKBOX_URL } from '../../../utils/constants/constants'

// Kickbox email verification
const validateEmail = async value => {
  if(value) {
    let error
    return axios.get(`${KICKBOX_URL}${value}`) // returns a Promise
    .then(response => {
      if(response.data.result !== 'deliverable') {
        error = 'Undeliverable email entered. Please use another email.'
      }
      return error
    }).catch(err => {
      console.error(err)
    })
  }
}

export default validateEmail
