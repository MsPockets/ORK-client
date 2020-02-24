'use strict'

const authEvents = require('./events')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword).hide()
  $('#sign-out').on('click', authEvents.onSignOut).hide()
  $('#game-board').hide()
  $('#instructions').hide()
  $('#start-game').hide()
  $('#reset').hide()
  $('#game-info').hide()
  $('#start-game').on('click', authEvents.onStartGame)
  $('.game-tile').on('click', authEvents.onMakeMove)
  $('#reset').on('click', authEvents.onReset)
  $('#get-games').hide()
  $('#get-games').on('click', authEvents.onGetGames)
  })
  