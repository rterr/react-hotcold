var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers');
var actions = require('./actions');

var store = createStore(reducers.gameController);
module.exports  = store;
