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
  $('#add-award').show()
  $('#get-awards').show()
  $('.sign-up-button').hide()
  $('#sign-in-form').hide()
  $('#sign-up-modal').modal('hide')
  $('#add-award').show()
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
  $('#add-award').hide()
  $('#get-awards').hide()
  $('#add-award').hide()
  $('#content').hide()
  $('#edit-award-form').hide()
}
const onSignOutFailure = function(response) {
  $('#message').text('Failed to sign out')
  failureMessage()
  
}
const onAddAwardSuccess = function(response) {
  console.log('boop')
  $('#message').text('Award Created')
  $('#add-award').trigger('reset')
  successMessage()
  
}
const onAddAwardFailure = function(response) {
  console.log('poob')
  $('#message').text('Failed to add award')
  $('#add-award').trigger('reset')
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
const onEditAwardSuccess = function (response) {
  successMessage()
}
const onEditAwardFailure = function (response) {
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
  onEditAwardSuccess,
  onEditAwardFailure
}
