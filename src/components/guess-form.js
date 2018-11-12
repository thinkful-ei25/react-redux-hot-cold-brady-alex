import React from 'react';
import { connect } from 'react-redux';
import { addGuess } from '../actions';
import './guess-form.css';

class GuessForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    this.props.dispatch(addGuess(value));
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

export default connect()(GuessForm);