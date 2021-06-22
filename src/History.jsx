import React from 'react';

import HistoryItem from './HistoryItem';

function History(props) {
  return (
    <ol>
      {props.history.map((step, stepNumber) => {
        return (
          <HistoryItem
            bold={props.currentStepNumber === stepNumber}
            key={stepNumber}
            stepNumber={stepNumber}
            step={step}
            onClick={props.onClick}
          />
        );
      })}
    </ol>
  );
}

export default History;
