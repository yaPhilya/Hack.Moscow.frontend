import axios from 'axios'

const API_URL = 'http://188.246.233.30:5000/parse'

export const doParseRequest = text => {
  return axios.post(API_URL, {
    text,
  })
}