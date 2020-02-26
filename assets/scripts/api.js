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
  console.log('api hit')
  console.log(data)
  return $.ajax({
    url: config.apiUrl + "/awards",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {award:data}
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
  const id = $(event.target).data('id')
  return $.ajax({
    url: config.apiUrl + "/awards/" + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const editAward = function (data) {
  console.log(data)
  const id = data.id
  return $.ajax({
    url: config.apiUrl + "/awards/" + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {award:data}
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
    editAward
  }