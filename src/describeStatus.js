function describeStatus(status, nextGlyph) {
  if (status.winner) {
    return 'Winner: ' + status.winner;
  } else if (!status.draw) {
    return 'Next player: ' + nextGlyph;
  } else {
    return 'Draw';
  }
}

export default describeStatus;
