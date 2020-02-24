const store = require('./store')
const api = require('./api')
 
let turnCounter = 0
const changePlayer = () => {
  store.playerMarker === 'x' ? store.playerMarker = 'o' : store.playerMarker = 'x'
}
let gameOver = false
let gamesPlayed = 0
const clearBoxes = function() {
  for (let i = 0; i < 9; i++) {
    const buttonSelector = '.game-tile#' + i
    $(buttonSelector).text('')
  }
}




const checkForWin = function () {
  if ((store.game.cells[0] !== '') && (store.game.cells[0] === store.game.cells[1]) && (store.game.cells[0] === store.game.cells[2])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[3] !== '') && (store.game.cells[3] === store.game.cells [4] && store.game.cells[3] === store.game.cells[5])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[6] !== '') && (store.game.cells[6] === store.game.cells [7] && store.game.cells[6] === store.game.cells[8])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[0] !== '') && (store.game.cells[0] === store.game.cells [3] && store.game.cells[0] === store.game.cells[6])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[1] !== '') && (store.game.cells[1] === store.game.cells [4] && store.game.cells[1] === store.game.cells[7])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[2] !== '') && (store.game.cells[2] === store.game.cells [5] && store.game.cells[2] === store.game.cells[8])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[0] !== '') && (store.game.cells[0] === store.game.cells [4] && store.game.cells[0] === store.game.cells[8])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[2] !== '') && (store.game.cells[2] === store.game.cells [4] && store.game.cells[2] === store.game.cells[6])) {
    $('#message').text(`${store.playerMarker}'s Win! `)
    return gameOver = true
  }
  else if ((store.game.cells[0] !== '') && (store.game.cells[1] !== '') && (store.game.cells[2] !== '') && (store.game.cells[3] !== '') && (store.game.cells[4] !== '') && (store.game.cells[5] !== '') && (store.game.cells[6] !== '') && (store.game.cells[7] !== '') && (store.game.cells[8] !== '')) {
    $('#message').text('Draw!')
    return gameOver = true
  }
}

const onSignUpSuccess = function(response) {
  $('#message').text(response.user.email + ' signed up')
  $('#sign-up-form').trigger('reset')
  $('#message').addClass('success')
}
const onSignUpFailure = function(response) {
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
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#instructions').show()
  $('#start-game').show()
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
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#game-board').hide()
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#reset').hide()
  clearBoxes()
  $('#game-counter').hide()
  $('#current-player').hide()
  $('#start-game').hide()
  $('#get-games').hide()
  gamesPlayed = 0
}
const onSignOutFailure = function(response) {
  $('#message').text('Failed to sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  
}

const onStartPlayingSuccess = function(response) {
  $('#game-board').show()
  $('#reset').show()
  $('#instructions').hide()
  $('#game-info').show()
  $('#message').text('Game board created')
  $('#message').addClass('success')
  store.game = response.game
  $('#current-player').show()
  $('#current-player').text(`Current Player: ${store.playerMarker}`)
  $('#game-counter').show()
  $('#game-counter').text(`Games Played: ${gamesPlayed}`)
  $('#start-game').hide()
  $('#get-games').show()

}

const onStartPlayingFailure = function () {
  $('#message').text('Failed to load game board')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onMakeMoveSuccess = function (event) {
  // console.log(gameOver)
  if ($(event.target).is(':empty') && (gameOver === false)) {
    $('#current-player').text(`Current Player: ${store.playerMarker}`)
    $('#message').removeClass()
    $('#message').addClass('success')
    $('#message').text('Move Made')
    $(event.target).text(store.playerMarker)
    turnCounter += 1
    store.game.cells[$(event.target).attr('id')] = store.playerMarker
    if (turnCounter >= 5) {
      checkForWin()
    }
    changePlayer()
    // console.log(store.game.cells)
  } 
  else {
    $('#message').removeClass()
    $('#message').addClass('failure')
    return $('#message').text("You can't place your token here!")
    
  }
}

const onMakeMoveFailure = function () {
  $('#message').text('Failed to make move')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onResetSuccess = function (response) {
  // console.log(store.game)
  // console.log(response.game)
  store.game = response.game
  // console.log('trying to clear')
  clearBoxes()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('New game started')
  $('#current-player').text(`Current Player: ${store.playerMarker}`)
  gameOver = false
  gamesPlayed += 1
  store.playerMarker = 'x'
  $('#game-counter').text(`Games Played: ${gamesPlayed}`)
}

const onResetFailure = function() {
  // console.log('didnt feel like trying')
  $('#message').text('Failed to reset')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onGetGamesSuccess = function (data) {
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text(`Total Games Played: ${data.games.length}`)
}
const onGetGamesFailure = function () {
  $('#message').text('Failed to get games!')
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
  onStartPlayingSuccess,
  onStartPlayingFailure,
  onMakeMoveSuccess,
  onMakeMoveFailure,
  checkForWin,
  onResetSuccess,
  onResetFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}
