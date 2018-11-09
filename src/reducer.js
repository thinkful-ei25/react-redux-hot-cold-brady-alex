import {ADD_GUESS, SET_FEEDBACK, RESTART_GAME, SET_AURAL} from './actions';

const initialState = {
  guesses: [],
  count: 0,
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default function reducer(state = initialState, action){
  if (action.type === ADD_GUESS){
    const count = state.guesses.length;
    return Object.assign({}, state, {guesses: [...state.guesses, action.guess], count: count + 1});
    
  } else if(action.type === SET_FEEDBACK){
    const difference = Math.abs(state.guesses[state.guesses.length-1] - state.correctAnswer);
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
    return Object.assign({}, state, {feedback: feedback});

  } else if(action.type === RESTART_GAME){
    return Object.assign({}, initialState, {correctAnswer: Math.floor(Math.random() * 100) + 1});

  } else if(action.type === SET_AURAL){
    const pluralize = state.count !== 1;
    let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.count} ${pluralize ? 'guesses' : 'guess'}.`;
    if (state.count > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
    }
    return Object.assign({}, state, {auralStatus: auralStatus});

  }
  return state;
}