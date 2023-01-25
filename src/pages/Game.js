import React, { useState, useEffect } from 'react';
import Playboard from '../components/PlayBoard';
import ScoreBoard from '../components/ScoreBoard';
import "../styles/Game.css";

function Game({userName}) {
  const [p1Hand, setP1Hand] = useState(null);
  const [p2Hand, setP2Hand] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState([0,0,0]); //[win, lose, draw]

  return (
    <div className={"page-wrapper"}>
      <ScoreBoard userName={userName} score={score} />
      <Playboard 
        p1Hand={p1Hand} 
        setP1Hand={setP1Hand} 
        p2Hand={p2Hand} 
        setP2Hand={setP2Hand} 
        result={result} 
        setResult={setResult}
        score={score}
        setScore={setScore} 
      />
    </div>
    
  );
}

export default Game;
