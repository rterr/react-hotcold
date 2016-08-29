// 1. Generate random number
// 2. Take user input for the guess
// 3. Compare guess to the random number
// 4. Return hotness rating
// 5. Return number of guesses
// 6. Add to and return set of numbers that have already been guessed
// *. Continue 2 - 6 until guess matches random number
// 7. Start new game (reset all variables) -> Back to #1

var MAKE_RANDNUM = 'MAKE_RANDNUM';
var makeRandNum = function() {
  return {
    type: MAKE_RANDNUM
  }
}

var GET_USERNUM = 'GET_USERNUM';
var getUserNum = function() {
  return {
    type: GET_USERNUM
  }
}

var COMPARE_NUM = 'COMPARE_NUM';
var compareNum = function() {
  return {
    type: COMPARE_NUM
  }
}

var RETURN_RATING = 'RETURN_RATING';
var returnRating = function() {
  return {
    type: RETURN_RATING
  }
}

var RETURN_GUESSCOUNT = 'RETURN_GUESSCOUNT';
var returnGuessCount = function() {
  return {
    type: RETURN_GUESSCOUNT
  }
}

var RETURN_GUESSSET = 'RETURN_GUESSSET';
var returnGuessSet = function() {
  return {
    type: RETURN_GUESSSET
  }
}

var END_GAME = 'END_GAME';
var endGame = function() {
  return {
    type: END_GAME
  }
}

var START_NEWGAME = 'START_NEWGAME';
var startNewGame = function() {
  return {
    type: START_NEWGAME
  }
}

exports.MAKE_RANDNUM = MAKE_RANDNUM;
exports.makeRandNum = makeRandNum;
exports.GET_USERNUM = GET_USERNUM;
exports.getUserNum = getUserNum;
exports.COMPARE_NUM = COMPARE_NUM;
exports.compareNum = compareNum;
exports.RETURN_RATING = RETURN_RATING;
exports.returnRating = returnRating;
exports.RETURN_GUESSCOUNT = RETURN_GUESSCOUNT;
exports.returnGuessCount = returnGuessCount;
exports.RETURN_GUESSSET = RETURN_GUESSSET;
exports.returnGuessSet = returnGuessSet;
exports.END_GAME = END_GAME;
exports.endGame = endGame;
exports.START_NEWGAME = START_NEWGAME;
exports.startNewGame = startNewGame;
