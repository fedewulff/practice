import React, { useState, useRef, useEffect } from "react";
import "./useRefTimer.css";

export const UseRefTimer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    // Prevent multiple timers from being set
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="timerContainer">
      <h1>{time} seconds</h1>
      <div className="buttonsContainer">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

//
export const RefExample = () => {
  const boxRef = React.useRef(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  function handleStartAnimation() {
    setIsAnimating(true);
    boxRef.current.style.transform = "translateX(300px)";
    setTimeout(() => {
      setIsAnimating(false);
      boxRef.current.style.transform = "";
    }, 1000);
  }

  return (
    <div className="App">
      <div className={`box ${isAnimating ? "is-animating" : ""}`} ref={boxRef}>
        <p>Hello, I'm an animated box!</p>
      </div>
      <button onClick={handleStartAnimation}>Start Animation</button>
    </div>
  );
};

//
export function Counter() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    console.log(savedCallback);

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
