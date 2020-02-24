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

const onStartGame = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.startPlaying()
      .then(ui.onStartPlayingSuccess)
      .catch(ui.onStartPlayingFailure)
    
}


const onMakeMove = function(event) {
  // console.log(event.target)
  //console.log(store.game)
    api.makeMove(event)
      .then(() => ui.onMakeMoveSuccess(event))
      .catch(ui.onMakeMoveFailure)
  
}

const onReset = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.reset()
      .then(ui.onResetSuccess)
      .catch(ui.onResetFailure)
}

const onGetGames = function(event) {
  const form = event.target
  const data = getFormFields(form)
    api.getGames(data)
      .then(ui.onGetGamesSuccess)
      .catch(ui.onGetGamesFailure)

}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onMakeMove,
  onReset,
  onGetGames
}
