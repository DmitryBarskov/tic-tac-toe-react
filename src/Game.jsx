import React from 'react';

import Board from './Board';
import calculateWinner from './calculateWinner';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      nextGlyph: 'X'
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextGlyph: step % 2 === 0 ? 'X' : 'O'
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(current.squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.nextGlyph;
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      nextGlyph: this.state.nextGlyph === 'X' ? 'O' : 'X'
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + this.state.nextGlyph;

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to beginning';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  };
}

export default Game;
