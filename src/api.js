import axios from 'axios'

const API_URL = 'http://backend:5000/parse'

export const doParseRequest = text => {
  return axios.post(API_URL, {
    text,
  })
}