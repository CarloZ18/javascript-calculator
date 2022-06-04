import { Operators } from "./Components/Operators";
import { Display } from "./Components/Display";
import { MemoryDisplay } from "./Components/MemoryDisplay";
import "./index.css";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [memoryDisplay, setMemoryDisplay] = useState("");
  console.log(currentDisplay[1]);
  let prevDisplay = 0;

  const alertLimit = () => {
    setCurrentDisplay("DIGIT LIMIT");

    setTimeout(() => {
      setCurrentDisplay(prevDisplay);
    }, 1000);
  };

  const pressNum = (e) => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay === 0) {
        setCurrentDisplay(e.target.value);
      } else if (currentDisplay.length > 14) {
        prevDisplay = currentDisplay;
        alertLimit();
      } else if (
        currentDisplay.length === 3 ||
        currentDisplay.length === 7 ||
        currentDisplay.length === 11
      ) {
        //move coma to the right
           setCurrentDisplay(currentDisplay[0] + ',' + currentDisplay);
        
        }
        else {
        setCurrentDisplay(currentDisplay + e.target.value);
        
      }
    }
  };

  const clearDisplay = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      setCurrentDisplay(0);
    }
  };

  const changeSimbol = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay.charAt(0) === "-") {
        setCurrentDisplay(currentDisplay.slice(1));
      } else {
        setCurrentDisplay("-" + currentDisplay);
      }
    }
  };

  const porcentage = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay !== 0) {
        setCurrentDisplay(currentDisplay + "%");
      }
    }
  };

  const addDecimal = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay.includes(".")) {
        Swal.fire({
          title: "Decimal already exists",
          icon: "info",
        });
      } else {
        setCurrentDisplay(currentDisplay.concat("."));
      }
    }
  };

  const deleteLastNum = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay.length > 1) {
        setCurrentDisplay(currentDisplay.slice(1));
      } else {
        setCurrentDisplay(0);
      }
    }
  };

  return (
    <div id="app">
      <div id="calculator">
        <MemoryDisplay memoryDisplay={memoryDisplay} />
        <Display currentDisplay={currentDisplay} />
        <Operators
          pressNum={pressNum}
          clearDisplay={clearDisplay}
          deleteLastNum={deleteLastNum}
          changeSimbol={changeSimbol}
          addDecimal={addDecimal}
          porcentage={porcentage}
        />
      </div>
    </div>
  );
}

export default App;
