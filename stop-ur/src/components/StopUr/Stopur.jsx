import React from 'react';
import style from './Stopur.module.scss';

function Stopur({ time }) {
  return (
    <div className={style.StopUr}>
      <h1>Stopwatch: {time} Seconds</h1> 
    </div>
  );
}

export default Stopur;
