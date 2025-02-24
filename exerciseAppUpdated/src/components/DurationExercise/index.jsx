/*modified timer from https://react.dev/reference/react/useRef and https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e */

import { useState, useRef } from "react";

//this is a function that acts as a stopwatch, allowing the user to hit start and keep track of time for their duration based exercise
export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null); //this stores the start time when the timer is started
  const [now, setNow] = useState(null); //this stores the current/ongoing time
  const intervalRef = useRef(null); //this keeps track of time as it's updated by the millisecond

  //this function handles when the user hits start
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  //this function handles the opposite, when the user hits stop
  function handleStop() {
    setStartTime(null);
  }

  //this block formats the time to match the required output of 00:00:00 as a string
  const formattedTime = () => {
    let secondsPassed = 0;
    let minutesPassed = 0;
    let millisecondsPassed = 0;

    //this calcualtes how many minutes, seconds and milliseconds have passed
    if (startTime != null && now != null) {
      let timePassed = now - startTime;

      minutesPassed = Math.floor(timePassed / 60000);
      secondsPassed = Math.floor((timePassed % 60000) / 1000);
      millisecondsPassed = timePassed % 1000;
    }

    //this returns the formatted time with padding for zeros
    return `${String(minutesPassed).padStart(2, "0")}:${String(
      secondsPassed
    ).padStart(2, "0")}:${String(millisecondsPassed).padStart(3, "0")}`;
  };

  //this returns the user interface side of what is being output from the above functions
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
