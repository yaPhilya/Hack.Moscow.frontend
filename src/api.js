import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/parse'

export const doParseRequest = text => {
  return axios.post(API_URL, {
    text,
  })
}