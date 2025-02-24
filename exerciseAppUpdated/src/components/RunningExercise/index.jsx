import { useState, useRef } from "react";

//this function handles the different lap times as the user clicks "lap"
export default function RunningExercise() {
  const [laps, setLaps] = useState([]); //this is to store lap times
  const [isRunning, setIsRunning] = useState(false); //this is to check if the timer is started
  const [startTime, setStartTime] = useState(null); //this gets the start time
  const [now, setNow] = useState(null); //this gets the updating time
  const intervalRef = useRef(null); //connects to the interval function

  //this function formats the time to match the duration component time structure
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = (time % 1000).toString().padStart(3, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  //this function handles the starting and resuming of the laps
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  //this handles stopping the lap
  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  //this handles the recording of the lap time and adds it to the state
  const handleLap = () => {
    const lapTime = now - startTime;
    setLaps([...laps, lapTime]);
  };

  //this function handles resetting the laps and timer
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setStartTime(null);
    setNow(null);
    setLaps([]);
  };

  //this keeps track of how much time has passed
  const totalTime = now && startTime ? now - startTime : 0;

  //this returns the user interface side of the output of the functions
  return (
    <div>
      <h1>Running Exercise</h1>
      <h2>Duration: {formatTime(totalTime)}</h2>
      <div>
        <h3>Laps:</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              Lap {index + 1}: {formatTime(lap)}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="exerciseButton"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>

        <button
          className="exerciseButton"
          onClick={handleLap}
          disabled={!isRunning}
        >
          Record Lap
        </button>
        <button
          className="exerciseButton"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button className="exerciseButton" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
