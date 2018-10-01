import axios from 'axios'
import vm from '../main'

// const PRODUCT_URL = window.location.host.indexOf('www.mhealth100.com') > -1 ? 'https://www.mhealth100.com' : 'http://' + window.location.host
const PRODUCT_URL = 'https://test3.mhealth100.com'
const MOCK_URL = 'http://10.0.1.49:8288/mwp/managementPlatform'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PRODUCT_URL : MOCK_URL

axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  var token = sessionStorage.getItem('token')
  config.headers['Authorization'] = token
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  if (res.data.resultCode !== 20000) {
    vm.$message({
      message: res.data.resultDesc,
      type: 'warning'
    })
    // return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

function get (url, data) {
  url = url + getUrl(data)
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function post (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function put (url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function del (url, data) {
  return new Promise((resolve, reject) => {
    url = url + getUrl(data)
    axios.delete(url)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function getUrl (data) {
  var str = ''
  for (var key in data) {
    str = str + '/' + String(data[key])
  }
  return str
}

export { get, post, put, del }
