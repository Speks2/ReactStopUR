import React from 'react';
import style from './Stopur.module.scss';

function Stopur({ time }) {
  return (
    <div className={style.StopUr}>
      <h1>Clock: {time} sekunder</h1>
    </div>
  );
}

export default Stopur;
