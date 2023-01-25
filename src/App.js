import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import Record from './pages/Record';
import './App.css';

function App() {
  const [userName, setUserName] = useState(''); // userName는 입력값, setuserName는 입력값을 변경할 함수

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home userName={userName} setUserName={setUserName} />}/>
        <Route path="/game" element={<Game userName={userName} />}/>
        <Route path="/record" element={<Record />} />
      </Routes>
    </Router>
  )
}

export default App;
