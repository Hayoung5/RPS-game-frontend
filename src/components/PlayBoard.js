import { Link } from "react-router-dom";
import React, { useState } from 'react';
import getRandomHand from '../utils/getRandomHand';
import whoWin from '../utils/whoWin';
import "../styles/Game.css";


function PlayBoard({p1Hand, p2Hand, setP1Hand, setP2Hand, result, setResult, score, setScore}) {
    const [disable, setDisable] = useState(false);
    const [visible, setVisible] = useState(false);
    const hands = ["rock", "paper", "scissor" ];

    const handleClick = (e) => {
        e.preventDefault();
        const myHand = e.target.getAttribute('alt');
        const randomHand = getRandomHand();

        setP1Hand(() => { return myHand });
        setP2Hand(() => { return randomHand });
        setResult(() => { return whoWin(e.target.getAttribute('alt'), randomHand) });
        setDisable(() => {return true});
        setVisible(() => {return true});
        setScore(() => {
            let whowin = whoWin(e.target.getAttribute('alt'), randomHand);
            let win = score[0];
            let lose = score[1];
            let draw = score[2];
            if (whowin != null) {
              if (whowin == 1) {
                win++;
              } else if (whowin == 2) {
                lose++;
              } else if (whowin == 0) {
                draw++;
              }
              return [win, lose, draw];
            }
            else {return score}
        });
    }

    const handleRetry = (e) => {
        e.preventDefault();
        setDisable(() => {return false});
        setVisible(() => {return false});
        setP1Hand(() => { return null });
        setP2Hand(() => { return null });

    }

    return (
        <div>
            {/* for player1 */}
            <div className={"text"}>{"Choose your Hand!! (Start right away with a click.)"}</div>
            <span className={"my-hand-wrapper"}>
                {hands.map((item, idx) => {
                    return (
                        <button
                            className={"my-hand-button" + (p1Hand == idx ? `-active` : "")} 
                            onClick={handleClick}
                            disabled={disable}
                        >
                        <img src={`/${item}.jpg`} alt={idx} className="my-hand-button" />
                        </button>
                );})}
            </span>
            {/* for player2 */}
            <div className={"text"}>{"Computer's choice"}</div>
            <img src={'/computer.png'} style={{height:"270px"}}/>
            {p2Hand==0 && <img src={'/rock.jpg'} className="your-hand-button" />}
            {p2Hand==1 && <img src={'/paper.jpg'} className="your-hand-button" />}
            {p2Hand==2 && <img src={'/scissor.jpg'} className="your-hand-button" />}
            {visible 
                && 
                <div className={"result-text"} style={{color: result == 0 ? "green" : result == 1 ? "blue" : result == 2 ? "red" : "black"}}>
                    {result == 0 ? "Draw " : result == 1 ? "You win! " : result == 2 ? "Computer win! " : ""}
                    <button onClick={handleRetry} className={"text-button"}>{"Retry"}</button>
                    <Link to="/record">
                        <button className={"text-button"}>{"Check record"}</button>
                    </Link>
                </div>
            }
        </div>
    );
}

export default PlayBoard;