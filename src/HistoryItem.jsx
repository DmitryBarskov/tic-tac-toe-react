import React from 'react';

function formatLocation(location) {
  if (location === undefined || location === null) {
    return "";
  }

  let column = location % 3 + 1;
  let row = Math.floor(location / 3) + 1;
  return `(${row}, ${column})`;
}

function HistoryItem(props) {
  const stepNumber = props.stepNumber;
  const description = stepNumber ? 'Go to move #' + stepNumber : 'Go to beginning';
  return (
    <div className={props.highlighted ? "red" : ""}>
      <span>{stepNumber}. </span>
      <i>{formatLocation(props.step.location)}</i>
      <button
        onClick={() => props.onClick(props.stepNumber)}
      >
        {description}
      </button>
    </div>
  );
}

export default HistoryItem;
