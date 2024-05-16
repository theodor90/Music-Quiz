import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const limit = 10;
  const [counter, setCounter] = useState(limit);

  useEffect(() => {
      const timeLeft = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

      return () => clearInterval(timeLeft);
  }, [counter]);

  return (
      <div className="timer">
        {counter <= 5 ? <p><span>Time left: </span><span style={{color: "red"}}>{counter}</span></p> : <p>Time left: {counter}</p>}
      </div>
  );
};

export default Timer;
