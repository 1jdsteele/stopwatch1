import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import './App.css';
// import { useState } from 'react';

function App() {


  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})

  const start = () => console.log("hello from start arrow function")



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
