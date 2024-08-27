import React, { useState, useEffect } from 'react';
import style from './components/StopUr/Stopur.module.scss'; 
import Stopur from './components/StopUr/Stopur'; 

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    //  Reset knap.
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className={style.App}>
      <Stopur time={time} isRunning={isRunning} />
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
