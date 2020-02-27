const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')



const onSignUp = function(event) {
  event.preventDefault()
  const form = event.targets
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
  console.log(form)
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
      .then(ui.onAddAwardSuccess, (function () {
        onViewAward(event)}))
      .catch(ui.onAddAwardFailure)
}

const onViewAward = function(event) {
  event.preventDefault()
    api.viewAward()
      .then(ui.onViewAwardSuccess)
      .catch(ui.onViewAwardFailure)
}

const onRemoveAward = function(event) {
  const id = $(event.target.id).data('id')
  console.log(id)
  console.log('click')
    api.removeAward(id)
      .then(function () {
        onViewAward(event)}
      )
      .catch(ui.onRemoveAwardFailure)
}

const onEditAward = function (event) {
  //change event listener to include the form so it doesnt refresh
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  console.log(data)
    api.editAward(data)
      .then(ui.onEditAwardSuccess)
      .catch(ui.onEditAwardFailure)

    return false
}

const editClick = function (event) {
    const data = $(event.target).data('award-id')
    $('#edit-award-form').show()
    $('#award-id').val(data)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddAward,
  onViewAward,
  onRemoveAward,
  onEditAward,
  editClick
}
