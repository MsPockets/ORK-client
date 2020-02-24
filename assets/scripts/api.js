const config = require('./config')
const store = require('./store')




const signUp = function(data) {
  //console.log('signUP')
  return $.ajax({
    url: config.apiUrl + "/sign-up",
    method: 'POST',
    data: data
  })
  
}

const signIn = function(data) {
  return $.ajax({
    url: config.apiUrl + "/sign-in",
    method: 'POST',
    data: data
  })
  
}
const changePassword = function(data) {
  return $.ajax({
    url: config.apiUrl + "/change-password",
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function() {
  return $.ajax({
    url: config.apiUrl + "/sign-out",
    method: 'DELETE',
    headers: {
      Authorization: 'Token token='+ store.user.token 
    },
  
  })
}
const addAward = function (data) {
  return $.ajax({
    url: config.apiUrl + "/awards",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const viewAward = function (data) {
  return $.ajax({
    url: config.apiUrl + "/awards/:id",
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const removeAward = function (data) {
  return $.ajax({
    url: config.apiUrl + "/awards/:id",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}


  module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut,
    addAward
  }