import Axios from "axios"

const API_URL = 'http://localhost:3000'

export default {
  get(endpoint, config) {
    return Axios.get(`${API_URL}/${endpoint}`, config)
  },
  post(endpoint, body, config) {
    return Axios.post(`${API_URL}/${endpoint}`, body, config)
  },
  put(endpoint, body, config) {
    return Axios.put(`${API_URL}/${endpoint}`, body, config)
  }
}