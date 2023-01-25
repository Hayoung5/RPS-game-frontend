import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home({ userName, setUserName }) {
  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleStartButton = () => {
    // 시작하기 버튼 클릭 시 수행할 로직
    console.log("You've started with the input value: ", userName);
  };

  return (
    <div className={"page-wrapper"}>
        <div className={"title"}>{"Play RPS Game!"}</div>
        <div className={"box-wrapper"}>
            <span>{"Enter your user name "}</span>
            <input type="text" className={"insert-box"} value={userName} onChange={handleInputChange} />
            <Link to="/game">
                <button className={"button"} onClick={handleStartButton}>{"Start"}</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
