'use strict'

const authEvents = require('./events')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword).hide()
  $('#sign-out').on('click', authEvents.onSignOut).hide()
  $('#add-award').on('submit', authEvents.onAddAward)
  $('#get-users').on('click', authEvents.onViewUser)
  })
  