let apiUrl
const apiUrls = {
  development: 'https://owlbear-hatchery.herokuapp.com/',
  production: 'https://owlbear-hatchery-production.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
