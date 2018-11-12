export const ADD_GUESS = 'ADD_GUESS';
export function addGuess(guess){
  return{
    type: ADD_GUESS,
    guess
  };
}

export const SET_FEEDBACK= 'SET_FEEDBACK';
export function setFeedback(){
  return{
    type:SET_FEEDBACK 
  }
}

export const RESTART_GAME = 'RESTART_GAME';
export function restartGame(){
  return {
    type: RESTART_GAME
  }
}

export const SET_AURAL = 'SET_AURAL';
export function setAural(){
  return{
    type: SET_AURAL
  }
}

