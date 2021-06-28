import React from 'react';

import Board from './Board';
import History from './History';

import calculateStatus from './calculateStatus';
import describeStatus from './describeStatus';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        location: null
      }],
      stepNumber: 0,
      nextGlyph: 'X'
    }
  }

  jumpTo(stepNumber) {
    this.setState({
      stepNumber: stepNumber,
      nextGlyph: stepNumber % 2 === 0 ? 'X' : 'O'
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateStatus(current.squares).gameOver || squares[i]) {
      return;
    }

    squares[i] = this.state.nextGlyph;
    this.setState({
      history: history.concat([{
        squares: squares,
        location: i
      }]),
      stepNumber: history.length,
      nextGlyph: this.state.nextGlyph === 'X' ? 'O' : 'X'
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const status = calculateStatus(current.squares);
    const description = describeStatus(status, this.state.nextGlyph);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            highlightSquares={status.winningLine}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div>
          <div>{description}</div>
          <History
            history={history}
            currentStepNumber={this.state.stepNumber}
            onClick={(i) => this.jumpTo(i)}
          />
        </div>
      </div>
    );
  };
}

export default Game;
