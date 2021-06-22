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
  const move = props.move;
  const description = move ? 'Go to move #' + move : 'Go to beginning';
  return (
    <li key={props.move}>
      <i>{formatLocation(props.step.location)}</i>
      <button
        onClick={() => props.onClick(props.move)}
      >
        {description}
      </button>
    </li>
  );
}

function History(props) {
  return (
    <ol>
      {props.history.map((step, move) => {
        return (
          <HistoryItem
            key={move}
            move={move}
            step={step}
            onClick={props.onClick}
          />
        );
      })}
    </ol>
  );
}

export default History;
