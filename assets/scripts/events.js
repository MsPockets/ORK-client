const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')


const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
    api.signUp(data)
      .then(ui.onSignUpSuccess)
      .catch(ui.onSignUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
    api.signIn(data)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
}

const onChangePassword  = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
    api.changePassword(data)
      .then(ui.onChangePasswordSuccess)
      .catch(ui.onChangePasswordFailure)
}

const onSignOut  = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.signOut()
      .then(ui.onSignOutSuccess)
      .catch(ui.onSignOutFailure)
}

const onAddAward = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
    api.addAward(data)
      .then(ui.onAddAwardSuccess)
      .catch(ui.onAddAwardFailure)
}

const onViewAward = function(event) {
  event.preventDefault()
    api.viewAward()
      .then(ui.onViewAwardSuccess)
      .catch(ui.onViewAwardFailure)
}

const onRemoveAward = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.removeAward(data)
      .then(ui.onRemoveAwardSuccess)
      .catch(ui.onRemoveAwardFailure)
}
const onAddAttencance = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.addAttendance(data)
      .then(ui.onAddAttencanceSuccess)
      .catch(ui.onAddAttencanceFailure)
}
const onViewAttendance = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.viewAttendance(data)
      .then(ui.onViewAttendanceSuccess)
      .catch(ui.onViewAttendanceFailure)
}
const onRemoveAttendance = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.removeAttendance(data)
      .then(ui.onRemoveAttendanceSuccess)
      .catch(ui.onRemoveAttendanceFailure)
}
const onAddUser = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.addUser(data)
      .then(ui.onAddUserSuccess)
      .catch(ui.onAddUserFailure)
}
const onViewUser = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.viewUser(data)
      .then(ui.onViewUserSuccess)
      .catch(ui.onViewUserFailure)
}
const onRemoveUser = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.removeUser(data)
      .then(ui.onRemoveUserSuccess)
      .catch(ui.onRemoveUserFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddAttencance,
  onViewAttendance,
  onRemoveAttendance,
  onAddAward,
  onViewAward,
  onRemoveAward,
  onAddUser,
  onViewUser,
  onRemoveUser
}
