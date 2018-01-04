import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'
axios.interceptors.request.use(function (config) {
  if (typeof window === 'undefined') {
    return config
  }

  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const appService = {
  getPosts (categoryId) {
    return axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
      .then(response => response.data)
  },
  login (credentials) {
    return axios.post('/services/auth.php', credentials)
      .then(response => response.data)
  },
  getProfile () {
    return axios.get('/services/profile.php', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(response => response.data)
  }
}

export default appService
