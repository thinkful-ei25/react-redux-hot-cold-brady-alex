import React from 'react';
import {connect} from 'react-redux';
import {addGuess, setFeedback, restartGame, setAural} from '../actions';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

class Game extends React.Component {

  render() {
    // const { feedback, guesses, auralStatus } = this.state;
    const guessCount = this.props.guesses.length;
    const { dispatch }= this.props;
    console.log(this.props);

    return (
      <div>
        <Header
          onRestartGame={() => dispatch(restartGame())}
          onGenerateAuralUpdate={() => dispatch(setAural())}
        />
        <main role="main">
          <GuessSection
            feedback={this.props.feedback}
            guessCount={guessCount}
            onMakeGuess={guess => dispatch(addGuess(guess))}
          />
        <StatusSection guesses={this.props.guesses}
          auralStatus={this.props.auralStatus}
        />
        <InfoSection />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    guesses: state.guesses,
    feedback: state.feedback,
    auralStatus: state.auralStatus,
  };
}

export default connect(mapStateToProps)(Game);

