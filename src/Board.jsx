import React from 'react';

import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare(i) {
    let highlighted = this.props.highlightSquares?.find(
      square => square === i
    ) !== undefined;

    return (
      <Square
        className={highlighted ? 'red' : ''}
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(i) {
    return (
      <div className="board-row" key={i}>
        {[0, 1, 2].map(column => this.renderSquare(i * 3 + column))}
      </div>
    );
  }

  render() {
    return (
      <div>
        {[0, 1, 2].map(row => this.renderRow(row))}
      </div>
    );
  }
}

export default Board;
