import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import * as actions from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

console.log(store.getState());
store.dispatch(actions.addGuess(5));
console.log(store.getState());
store.dispatch(actions.setFeedback());
console.log(store.getState());
store.dispatch(actions.restartGame());
console.log(store.getState());
store.dispatch(actions.endGame());
console.log(store.getState());
store.dispatch(actions.setAural());
console.log(store.getState());
store.dispatch(actions.addGuess(5));
store.dispatch(actions.setAural());
console.log(store.getState());


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



