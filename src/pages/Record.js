import React, { useState } from 'react';
import { Link } from "react-router-dom";
import RecordBoard from '../components/RecordBoard';
import "../styles/Record.css";

function Record() {

  const dummy = [
    {userName: "jack", win: 20, lose: 4, draw: 5}, 
    {userName: "lemon", win: 17, lose: 3, draw: 10}, 
    {userName: "apple4", win: 5, lose: 2, draw: 2}, 
    {userName: "mike", win: 4, lose: 4, draw: 5},
    {userName: "Can22", win: 4, lose: 3, draw: 5}, 
    {userName: "jsow2", win: 1, lose: 3, draw: 5},
  ];

  return (
    <div className={"page-wrapper"}>
      <div className={"title2"}>{"Game Record"}</div>
      <RecordBoard />
      <Link to="/">
        <button className={"text-button"}>{"Go Home"}</button>
      </Link>
    </div>
  );
}

export default Record;
