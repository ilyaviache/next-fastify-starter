import axios from 'axios'

const request = axios.create()

export const BASE_URL = 'https://api.moondb.com/api'
// export const BASE_URL = 'http://localhost:3001/api'
export const WS_URL = 'wss://api.moondb.com'
// export const WS_URL = 'ws://localhost:3001/'
export const PUBLIC_URL = 'https://moondb.com/'
// export const PUBLIC_URL = 'http://localhost:3333/'

request.defaults.baseURL = BASE_URL
request.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
request.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

export const setupToken = token => {
  request.defaults.headers.common['Authorization'] = token
}

export const resetToken = () => {
  request.defaults.headers.common['Authorization'] = undefined
}

request.interceptors.request.use(
  request => request,
  error => {
    console.log(error)
  }
)

request.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // TODO Navigate to Login
    }
    return Promise.reject(error)
  }
)

export const post = async (url, data, config = {}) => request.post(url, data, config)
export const get = async (url, config = {}) => request.get(url, config)
export const put = async (url, data, config = {}) => request.put(url, data, config)
export const del = async (url, config = {}) => request.delete(url, config)

export const patch = async (url, data, config = {}) => request.patch(url, data, config)