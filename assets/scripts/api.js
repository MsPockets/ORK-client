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
    url: config.apiUrl + "/awards",
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}
const removeAward = function (data) {
  return $.ajax({
    url: config.apiUrl + "/awards/:id",
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const addAttendance = function (data) {
  return $.ajax({
    url: config.apiUrl + "/attendances",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const viewAttendance = function (data) {
  return $.ajax({
    url: config.apiUrl + "/attendacnes/:id",
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const removeAttendance = function (data) {
  return $.ajax({
    url: config.apiUrl + "/attendances/:id",
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const addUser = function (data) {
  return $.ajax({
    url: config.apiUrl + "/users",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const viewUser = function () {
  return $.ajax({
    url: config.apiUrl + "/users",
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const removeUser = function (data) {
  return $.ajax({
    url: config.apiUrl + "/users/:id",
    method: 'DELETE',
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
    addAward,
    viewAward,
    removeAward,
    addAttendance,
    viewAttendance,
    removeAttendance,
    addUser,
    viewUser,
    removeUser
  }