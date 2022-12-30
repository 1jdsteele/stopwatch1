import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import './App.css';
// import { useState } from 'react';

function App() {


  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})

  const start = () => {
    run();
    setInterval(run, 10);
  }

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {

    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});


  }
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnComponent start={start}/>
        </div>
      </div>   
    </div>
  );
}

export default App;
