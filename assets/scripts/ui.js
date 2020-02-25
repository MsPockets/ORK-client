const store = require('./store')
const api = require('./api')
 


const onSignUpSuccess = function(response) {
  $('#message').text(response.user.email + ' signed up')
  $('#sign-up-form').trigger('reset')
  $('#message').addClass('success')
  $("#sign-up-modal").modal('hide')
}
const onSignUpFailure = function(response) {
  $("#sign-up-modal").modal('hide')
  $('#message').text('Failed to sign up')
  $('#message').addClass('failure')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function(response) {
  $('#message').text(response.user.email + ' signed in')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password-form').show()
  $('#sign-out').show()
  $('.sign-up-button').hide()
  $('#sign-in-form').hide()
  $("#sign-up-modal").modal('hide')
  
}

const onSignInFailure = function(response) {
  $('#sign-in-form').trigger('reset')
  $('#message').text('Failed to sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePasswordSuccess = function(response) {
  $('#message').text('Password successfully changed')
  $('#change-password-form').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onChangePasswordFailure = function(response) {
  $('#change-password-form').trigger('reset')
  $('#message').text('Failed to change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = function(response) {
  $('#message').text('Signed Out')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.sign-up-button').show()
  $('#sign-in-form').show()
  $('#game-board').hide()
  $('#change-password-form').hide()
  $('#sign-out').hide()
  
  gamesPlayed = 0
}
const onSignOutFailure = function(response) {
  $('#message').text('Failed to sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  
}
const onAddAwardSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('ding')
}
const onAddAwardFailure = function(response) {
$('#message').text('Failed to add award')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onViewAwardSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onViewAwardFailure = function(response) {
$('#message').text('Failed to view award')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onRemoveAwardSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onRemoveAwardFailure = function(response) {
$('#message').text('Failed to remove award')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onAddAttendanceSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onAddAttendanceFailure = function(response) {
$('#message').text('Failed to add attendance')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onViewAttendanceSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onViewAttendanceFailure = function(response) {
$('#message').text('Failed to view attendance')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onRemoveAttendanceSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onRemoveAttendanceFailure = function(response) {
$('#message').text('Failed to remove attendance')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onAddUserSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onAddUserFailure = function(response) {
$('#message').text('Failed to add user')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onViewUserSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onViewUserFailure = function(response) {
$('#message').text('Failed to view user')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onRemoveUserSuccess = function(response) {
  $('#message').text('Award Created')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onRemoveUserFailure = function(response) {
$('#message').text('Failed to remove user')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
  onAddAttendanceSuccess, 
  onAddAttendanceFailure, 
  onViewAttendanceSuccess, 
  onViewAttendanceFailure, 
  onRemoveAttendanceSuccess, 
  onRemoveAttendanceFailure, 
  onAddUserSuccess, 
  onAddUserFailure, 
  onViewUserSuccess, 
  onViewUserFailure, 
  onRemoveUserSuccess, 
  onRemoveUserFailure
}
