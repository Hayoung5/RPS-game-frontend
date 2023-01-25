import React, { useState } from 'react';
import "../styles/Record.css";

function RecordBoard() {

  const dummy = [
    {userName: "jack", win: 20, lose: 4, draw: 5}, 
    {userName: "lemon", win: 17, lose: 3, draw: 10}, 
    {userName: "apple4", win: 5, lose: 2, draw: 2}, 
    {userName: "mike", win: 4, lose: 4, draw: 5},
    {userName: "Can22", win: 4, lose: 3, draw: 5}, 
    {userName: "jsow2", win: 1, lose: 3, draw: 5},
  ];

  return (
    <div>
        {dummy.map((item, idx) => {
          return (
            <div className={"list-text"}>{
              `${idx+1}. ${item.userName} : ${item.win} win,  ${item.lose} lose,  ${item.draw} draw`
            }</div>
          );
        })}
    </div>
  );
}

export default RecordBoard;
