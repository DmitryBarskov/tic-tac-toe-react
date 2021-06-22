import React from 'react';

import HistoryItem from './HistoryItem';

import Reversed from './Reversed';

function opposite(sort) {
  return sort === 'desc' ? 'asc' : 'desc';
}

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'asc'
    };
  }

  reverseSort() {
    this.setState({
      sort: opposite(this.state.sort)
    });
  }

  render() {
    let history = this.props.history;
    if (this.state.sort === 'desc') {
      history = new Reversed(history);
    }

    return (
      <div className="history">
        <h5>
          <span>History: </span>
          <button onClick={() => this.reverseSort()}>
            Sort by {opposite(this.state.sort)}
          </button>
        </h5>
        {history.map((step, stepNumber) => {
          return (
            <HistoryItem
              bold={this.props.currentStepNumber === stepNumber}
              key={stepNumber}
              stepNumber={stepNumber}
              step={step}
              onClick={this.props.onClick}
            />
          );
        })}
      </div>
    );
  }
}

export default History;
