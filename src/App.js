import { Operators } from "./Components/Operators";
import { Display } from "./Components/Display";
import { MemoryDisplay } from "./Components/MemoryDisplay";
import './index.css';
import { useState } from "react";


function App() {
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [memoryDisplay, setMemoryDisplay] = useState("");

  let prevDisplay = 0;

  const alertLimit = () => {
    setCurrentDisplay("DIGIT LIMIT");

    setTimeout(() => {
      setCurrentDisplay(prevDisplay);
    }, 1000);
  };

  const separator = (num) => {
    var str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  const pressNum = (e) => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay === 0) {
        setCurrentDisplay(e.target.value);
        setMemoryDisplay(e.target.value);
      } else if (currentDisplay.length > 14) {
        prevDisplay = currentDisplay;
        alertLimit();
      } else if (
        currentDisplay === "%" ||
        currentDisplay === "/" ||
        currentDisplay === "*" ||
        currentDisplay === "+"
      ) {
        setMemoryDisplay(memoryDisplay + e.target.value);
        setCurrentDisplay(e.target.value);
      } else if (memoryDisplay.charAt(0) === "0" && e.target.value === "0") {
        setCurrentDisplay(currentDisplay);
        setMemoryDisplay(memoryDisplay);
      } else {
        //add num and move coma to the right
        setCurrentDisplay(currentDisplay + e.target.value);
        setMemoryDisplay(memoryDisplay + currentDisplay + e.target.value);
      }
    }
  };

  const clearDisplay = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      setCurrentDisplay(0);
      setMemoryDisplay("");
    }
  };


  const porcentage = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay === 0) {
        setCurrentDisplay(currentDisplay);
      } else if (
        currentDisplay !== 0 &&
        currentDisplay !== "%" &&
        currentDisplay !== "/" &&
        currentDisplay !== "*" &&
        currentDisplay !== "-" &&
        currentDisplay !== "+"
      ) {
        setMemoryDisplay(memoryDisplay + "%");
        setCurrentDisplay("%");
      } else {
        setCurrentDisplay("%");
      }
    }
  };

  const divide = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay === 0) {
        setCurrentDisplay(currentDisplay);
      } else if (
        currentDisplay !== 0 &&
        currentDisplay !== "%" &&
        currentDisplay !== "/" &&
        currentDisplay !== "*" &&
        currentDisplay !== "-" &&
        currentDisplay !== "+"
      ) {
        setMemoryDisplay(memoryDisplay + "/");
        setCurrentDisplay("/");
      } else {
        setCurrentDisplay("/");
      }
    }
  };

  const multiply = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay === 0) {
        setCurrentDisplay(currentDisplay);
      } else if (
        currentDisplay !== 0 &&
        currentDisplay !== "%" &&
        currentDisplay !== "/" &&
        currentDisplay !== "*" &&
        currentDisplay !== "-" &&
        currentDisplay !== "+"
      ) {
        setMemoryDisplay(memoryDisplay + "*");
        setCurrentDisplay("*");
      } else {
        setCurrentDisplay("*");
      }
    }
  };

  const subtract = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay === 0) {
        setCurrentDisplay(currentDisplay);
      } else if (
        currentDisplay !== 0 &&
        currentDisplay !== "%" &&
        currentDisplay !== "/" &&
        currentDisplay !== "*" &&
        currentDisplay !== "-" &&
        currentDisplay !== "+"
      ) {
        setMemoryDisplay(memoryDisplay + "-");
        setCurrentDisplay("-");
      } else {
        setCurrentDisplay("-");
      }
    }
  };

  const sum = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay === 0) {
        setCurrentDisplay(currentDisplay);
      } else if (
        currentDisplay !== 0 &&
        currentDisplay !== "%" &&
        currentDisplay !== "/" &&
        currentDisplay !== "*" &&
        currentDisplay !== "-" &&
        currentDisplay !== "+"
      ) {
        setMemoryDisplay(memoryDisplay + "+");
        setCurrentDisplay("+");
      } else {
        setCurrentDisplay("+");
      }
    }
  };

  const addDecimal = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (!currentDisplay.includes(".")) {
        setCurrentDisplay(currentDisplay.concat("."));
      }
    }
  };

  const deleteLastNum = () => {
    if (currentDisplay !== "DIGIT LIMIT") {
      if (currentDisplay.length > 1) {
        setCurrentDisplay(currentDisplay.slice(0, -1));
      } else {
        setCurrentDisplay(0);
      }
    }
  };
const isOperator = /[*%/+‑]/,
    endsWithOperator = /[*%+‑/]$/,
    endsWithNegativeSign = /\d[*%/+‑]{1}‑$/;

  const equal = () => {
    

  };

  return (
    <div id="app">
      <div id="calculator">
        <MemoryDisplay memoryDisplay={separator(memoryDisplay)} />
        <Display currentDisplay={separator(currentDisplay)} />
        <Operators
          pressNum={pressNum}
          clearDisplay={clearDisplay}
          deleteLastNum={deleteLastNum}
          addDecimal={addDecimal}
          porcentage={porcentage}
          divide={divide}
          subtract={subtract}
          sum={sum}
          multiply={multiply}
          equal={equal}
        />
      </div>
    </div>
  );
}

export default App;
