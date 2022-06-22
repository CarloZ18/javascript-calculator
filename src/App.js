import { Operators } from "./Components/Operators";
import { Display } from "./Components/Display";
import { MemoryDisplay } from "./Components/MemoryDisplay";
import "./index.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(0);
  const [memoryDisplay, setMemoryDisplay] = useState("");
  const [prevValue, setPrevValue] = useState("0");
  const [currentDecimal, setCurrentDecimal] = useState("0");
  const [evaluated, setEvaluated] = useState(false);

  const endsWithOperator = /[*%+-/]$/,
    isOperator = /^[*%+-/]/,
    endsWithNegativeSign = /\d[*%/+-]{1}-$/;

  const alertLimit = () => {
    setDisplay("DIGIT LIMIT");
    setTimeout(() => {
      setDisplay(display);
    }, 1000);
  };

  const separator = (num) => {
    var str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  const addNum = (e) => {
    let value = e.target.value;
    if (display !== "DIGIT LIMIT" && evaluated === false) {
      if (display === 0) {
        setMemoryDisplay(memoryDisplay + value);
        setDisplay(value);
      } else if (display.length > 14) {
        alertLimit();
      } else if (display === "0" && value === "0") {
        setDisplay(display);
      } else {
        setDisplay(isOperator.test(display) ? value : display + value);
        setMemoryDisplay(memoryDisplay + value);
      }
    } else if (evaluated === true) {
      setDisplay(value);
      setMemoryDisplay(value);
      setEvaluated(false);
    }
  };

  const clearDisplay = () => {
    if (display !== "DIGIT LIMIT") {
      setDisplay(0);
      setMemoryDisplay("");
      setPrevValue("0");
      setCurrentDecimal("0");
      setEvaluated(false);
    }
  };

  const handleOperator = (e) => {
    const value = e.target.value;
    if (display !== "DIGIT LIMIT" && evaluated === false) {
      if (!endsWithOperator.test(memoryDisplay)) {
        setDisplay(value);
        setPrevValue(display);
        setMemoryDisplay(
          memoryDisplay === "0" ? display + value : memoryDisplay + value
        );
        setCurrentDecimal("0");
      } else if (!endsWithNegativeSign.test(memoryDisplay)) {
        setMemoryDisplay(
          (endsWithNegativeSign.test(memoryDisplay + value)
            ? memoryDisplay
            : prevValue) + value
        );
        setDisplay(value);
        setCurrentDecimal("0");
      } else {
        setDisplay(value);
        setMemoryDisplay(prevValue + value);
      }
    } else if (evaluated === true) {
      setDisplay(value);
      setMemoryDisplay(
        memoryDisplay.slice(memoryDisplay.indexOf("=") + 1) + value
      );
      setEvaluated(false);
    }
  };
  console.log(memoryDisplay);
  const addDecimal = () => {
    if (!currentDecimal.includes(".") && !display.includes("DIGIT LIMIT")) {
      if (display.length > 14) {
        alertLimit();
      } else if (endsWithOperator.test(memoryDisplay)) {
        setDisplay("0.");
        setMemoryDisplay(memoryDisplay + "0.");
        setCurrentDecimal("0.");
      } else {
        setCurrentDecimal(
          memoryDisplay.match(/(-?\d+\.?\d*)$/)[0] + ".",
          setDisplay(display + ".")
        );
        setMemoryDisplay(memoryDisplay + ".");
      }
    }
  };

  const deleteLastNum = () => {
    if (display !== "DIGIT LIMIT") {
      if (display.length > 1) {
        setDisplay(display.slice(0, -1));
      } else {
        setDisplay(0);
      }
    }
  };

  const equal = () => {
    if (display !== "DIGIT LIMIT") {
      setEvaluated(true);
      let expression = memoryDisplay;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression.replace("--", "+0+0+0+0+0+0+");
      let result = Math.round(10000 * eval(expression)) / 10000;
      setDisplay(result);
      setMemoryDisplay(memoryDisplay + "=" + result);
    }
  };

  return (
    <div id="app">
      <div id="calculator">
        <MemoryDisplay memoryDisplay={separator(memoryDisplay)} />
        <Display Display={separator(display)} />
        <Operators
          addNum={addNum}
          clearDisplay={clearDisplay}
          deleteLastNum={deleteLastNum}
          addDecimal={addDecimal}
          handleOperator={handleOperator}
          equal={equal}
        />
      </div>
    </div>
  );
}

export default App;
