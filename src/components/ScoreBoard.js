import React, { useState } from 'react';
import "../styles/Game.css";


function ScoreBoard({userName, score}) {
  const win = score[0];
  const lose = score[1];
  const draw = score[2];
  const tot = win + lose + draw;
  let percent;
  
  if (tot == 0) {
    percent = 0
  } else {
    percent = Math.round((win)/(tot) * 10000)/100;
  }

  return (
    <div className={"score"}>
      <div>
        {`user name: ${userName}`}
      </div>
      <div>{`score: ${win} win, ${lose} lose, ${draw} draw`}</div>
      <div>{`wining percentage: ${percent} %`}</div>
    </div>

  );
}

export default ScoreBoard;
