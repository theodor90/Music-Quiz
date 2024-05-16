import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const limit = 10;
  const [seconds, setSeconds] = useState(limit);

  const getTime = () => {
    setSeconds(seconds - 1);
  };

  useEffect(() => {
    const timeLeft = setInterval(() => getTime(), 1000);

    return () => clearInterval(timeLeft);
  }, []);

  return (
      <>
        {seconds}
      </>
  );
};

export default Timer;
