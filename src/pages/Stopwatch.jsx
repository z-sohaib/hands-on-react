import { useRef, useState } from "react";

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleClick() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = ((now - startTime) / 1000).toFixed(3);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>Time passed: {secondsPassed} seconds</h2>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Stopwatch;
