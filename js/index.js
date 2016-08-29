var actions = require('./actions');
var reducers = require('./reducers');
var store = require('./store');
var redux = require('redux');

store.dispatch(actions.makeGuess(53));
store.dispatch(actions.makeGuess(23));
store.dispatch(actions.makeGuess(1));
console.log(store.getState());
