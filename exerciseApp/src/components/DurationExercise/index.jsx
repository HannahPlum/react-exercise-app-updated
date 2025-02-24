/*modified timer from https://react.dev/reference/react/useRef and https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e */

import { useState, useRef } from "react";

//stopwatch function,
export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    setStartTime(null);
  }

  const formattedTime = () => {
    let secondsPassed = 0;
    let minutesPassed = 0;
    let millisecondsPassed = 0;

    if (startTime != null && now != null) {
      let timePassed = now - startTime;

      minutesPassed = Math.floor(timePassed / 60000);
      secondsPassed = Math.floor((timePassed % 60000) / 1000);
      millisecondsPassed = timePassed % 1000;
    }

    return `${String(minutesPassed).padStart(2, "0")}:${String(
      secondsPassed
    ).padStart(2, "0")}:${String(millisecondsPassed).padStart(3, "0")}`;
  };

  return (
    <div>
      <h2>Duration: {formattedTime()}</h2>
      <button className="exerciseButton" onClick={handleStart}>
        Start
      </button>
      <button className="exerciseButton" onClick={handleStop}>
        Reset
      </button>
    </div>
  );
}
