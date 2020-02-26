const store = require('./store')
const api = require('./api')
const handlebars = require('handlebars')
const showAwardsTemplate = require('../handlebars/users-index.handlebars')
 
const successMessage = function () {
  $('#message').removeClass()
  $('#message').addClass('success')
}
const failureMessage = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignUpSuccess = function(response) {
  $('#message').text(response.user.email + ' signed up')
  $('#sign-up-form').trigger('reset')
  $("#sign-up-modal").modal('hide')
  successMessage()
}
const onSignUpFailure = function(response) {
  $("#sign-up-modal").modal('hide')
  $('#message').text('Failed to sign up')
  $('#sign-up-form').trigger('reset')
  failureMessage()
}

const onSignInSuccess = function(response) {
  $('#message').text(response.user.email + ' signed in')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out').show()
  $('.sign-up-button').hide()
  $('#sign-in-form').hide()
  $("#sign-up-modal").modal('hide')
  successMessage()
  
}

const onSignInFailure = function(response) {
  $('#sign-in-form').trigger('reset')
  $('#message').text('Failed to sign in')
  failureMessage()
}

const onChangePasswordSuccess = function(response) {
  $('#message').text('Password successfully changed')
  $('#change-password-form').trigger('reset')
  successMessage()
}
const onChangePasswordFailure = function(response) {
  $('#change-password-form').trigger('reset')
  $('#message').text('Failed to change password')
  failureMessage()
}

const onSignOutSuccess = function(response) {
  $('#message').text('Signed Out')
  successMessage()
  $('.sign-up-button').show()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out').hide()
}
const onSignOutFailure = function(response) {
  $('#message').text('Failed to sign out')
  failureMessage()
  
}
const onAddAwardSuccess = function(response) {
  $('#message').text('Award Created')
  successMessage()
  
}
const onAddAwardFailure = function(response) {
  $('#message').text('Failed to add award')
  failureMessage() 
}
const onViewAwardSuccess = function(data) {
  $('#message').text('Awards are displayed below')
  successMessage()
  $('#content').html(showAwardsTemplate(data))
}
const onViewAwardFailure = function(response) {
  $('#message').text('Failed to view award')
  failureMessage() 
}
const onRemoveAwardSuccess = function(response) {
  $('#message').text('Award Deleted')
  successMessage()
}
const onRemoveAwardFailure = function(response) {
  $('#message').text('Failed to remove award')
  failureMessage() 
}

const onAddUserSuccess = function(response) {
  $('#message').text('User Born')
  successMessage()
}
const onAddUserFailure = function(response) {
  $('#message').text('Failed to add user')
  failureMessage()  
}
const onViewUserSuccess = function(data) {
  console.log(data)
  $('#message').text('Users are displayed below')
  successMessage()
}
const onViewUserFailure = function(response) {
  $('#message').text('Failed to view user')
  failureMessage() 
}
const onRemoveUserSuccess = function(response) {
  $('#message').text('User Slain')
  successMessage()
}
const onRemoveUserFailure = function(response) {
  $('#message').text('Failed to remove user')
  failureMessage()  
}





module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onAddAwardSuccess, 
  onAddAwardFailure, 
  onViewAwardSuccess, 
  onViewAwardFailure, 
  onRemoveAwardSuccess, 
  onRemoveAwardFailure,  
  onAddUserSuccess, 
  onAddUserFailure, 
  onViewUserSuccess, 
  onViewUserFailure, 
  onRemoveUserSuccess, 
  onRemoveUserFailure
}
