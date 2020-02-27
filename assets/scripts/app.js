'use strict'

const authEvents = require('./events')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword).hide()
  $('#sign-out').on('click', authEvents.onSignOut).hide()
  $('#add-award').on('submit', authEvents.onAddAward)
  $('#get-awards').on('click', authEvents.onViewAward).hide()
  $('.content').on('click', '.deeleet', authEvents.onRemoveAward)
  $('#add-award').hide() 
  $('body').on('submit', '#edit-award-form', authEvents.onEditAward)
  $('#get-awards').hide()
  $('#edit-award-form').hide()
  $('.content').on('click', '.edit-award-btn', authEvents.editClick)
})

  
