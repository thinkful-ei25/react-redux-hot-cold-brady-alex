import { ADD_GUESS, RESTART_GAME, SET_AURAL} from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_GUESS) {
    const difference = Math.abs(
      action.guess - state.correctAnswer
    );
    
    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm.";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = 'You got it!';
    }

    const pluralize = state.guesses.length !== 0;

    let auralStatus = `Here's the status of the game right now: ${
      feedback
    } You've made ${state.guesses.length +1} ${pluralize ? 'guesses' : 'guess'}.`;
    
    if (state.guesses.length > 0) {
      auralStatus += ` ${
        pluralize ? 'In order of most- to least-recent, they are' : 'It was'
      }: ${action.guess}, ${state.guesses.reverse().join(', ')}`;
    }

    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback,
      auralStatus
    });

  } else if(action.type === SET_AURAL){
    const pluralize = state.guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${
      state.feedback
    } You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
    
    if (state.guesses.length > 0) {
      auralStatus += ` ${
        pluralize ? 'In order of most- to least-recent, they are' : 'It was'
      }: ${state.guesses.reverse().join(', ')}`;
    }

    return Object.assign({}, state, {
      auralStatus
    });

  } else if (action.type === RESTART_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }
  return state;
}
