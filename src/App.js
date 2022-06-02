import { Operators } from "./Components/Operators";
import { Display } from "./Components/Display";
import { MemoryDisplay } from "./Components/MemoryDisplay";
import "./index.css";
import { useState } from "react";



function App() {
const [currentDisplay, setCurrentDisplay] = useState(0);
 console.log(currentDisplay);
 
const pressNum = (e) =>{
  if(currentDisplay===0){
  setCurrentDisplay([e.target.value]);
  }else{
    setCurrentDisplay(currentDisplay.unshift(currentDisplay,e.target.value));
  }
 
}

const clearDisplay = () =>{
  setCurrentDisplay(0);
}

const deleteLastNum = ()=>{
  setCurrentDisplay(currentDisplay.unshift());
}
  return (
    <div id="app">
      <div id="calculator">
        <MemoryDisplay />
        <Display currentDisplay={currentDisplay} />
        <Operators pressNum={pressNum} clearDisplay={clearDisplay} deleteLastNum={deleteLastNum} />
      </div>
    </div>
  );
}

export default App;
