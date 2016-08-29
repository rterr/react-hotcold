// 1. User inputs a guess
// 2. User start a new game

var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
  return {
    type: MAKE_GUESS,
    userNum: guess
  }
}

var START_NEWGAME = 'START_NEWGAME';
var startNewGame = function() {
  return {
    type: START_NEWGAME
  }
}


exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.START_NEWGAME = START_NEWGAME;
exports.startNewGame = startNewGame;
