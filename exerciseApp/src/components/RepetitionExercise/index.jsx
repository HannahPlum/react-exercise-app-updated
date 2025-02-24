//counter modified from https://react.dev/reference/react/useRef

//import useState hook so I may track and update my values in this component
import { useState } from "react";

//functional component for returning counter elements
export default function RepetitionExercise() {
  //useState keeps track of the count, starting from zero. setCount is used to update the count
  const [count, setCount] = useState(0);

  //this function runs when the user clicks the rep button, adding one to the count
  function buttonClick() {
    setCount(count + 1);
  }

  //this function runs when the user clicks the reset button, setting the count back to zero
  function resetButton() {
    setCount(0);
  }

  //this renders the actual buttons the user will be interacting with. The appropriate functions are called on click
  return (
    <div>
      <button className="exerciseButton" onClick={buttonClick}>
        Add Rep: {count}
      </button>

      <button className="exerciseButton" onClick={resetButton}>
        Reset
      </button>
    </div>
  );
}
