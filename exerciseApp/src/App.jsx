//useState manages state
import { useState } from "react";

//import styles
import "./App.css";

//import my two exercise components, repetition and duration
import RepetitionExercise from "./components/RepetitionExercise";

import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  //handleExercise function updates the selected exercise state whent the user clicks on an exercise
  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
  };

  //this renders the main user-interface that shows the exercise buttons if no exercise is selected yet. Eeach button is outfitted with an on click event handler that calls the handle exercise function
  return (
    <div id="container">
      {!selectedExercise && (
        <div id="exercises">
          <h1>Work Out!</h1>
          <button
            className="exerciseButton"
            id="plank"
            onClick={() =>
              handleExerciseSelect({ name: "Plank", type: "duration" })
            }
          >
            Plank
          </button>

          <button
            className="exerciseButton"
            id="pushups"
            onClick={() =>
              handleExerciseSelect({ name: "PushUps", type: "repetition" })
            }
          >
            PushUps
          </button>
          <button
            className="exerciseButton"
            id="running"
            onClick={() =>
              handleExerciseSelect({ name: "Running", type: "duration" })
            }
          >
            Running
          </button>
        </div>
      )}

      {/*this is rendered conditionally depending on whether the exercise has been selected or not, the name prop is passed in as well */}

      {selectedExercise && selectedExercise.type === "repetition" && (
        <div>
          <h1>{selectedExercise.name}</h1>
          <RepetitionExercise name={selectedExercise.name} />
        </div>
      )}
      {selectedExercise && selectedExercise.type === "duration" && (
        <div>
          <h1>{selectedExercise.name}</h1>
          <DurationExercise name={selectedExercise.name} />
        </div>
      )}
    </div>
  );
}

export default App;
