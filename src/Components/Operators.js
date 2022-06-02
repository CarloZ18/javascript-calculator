import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Operators = ({ pressNum, clearDisplay, deleteLastNum }) => {
  return (
    <div id="operators">
      <div>
        <button id="clear" className="operatorGray" onClick={clearDisplay}>
          C
        </button>
        <button id="simbol" className="operatorGray">
          +/-
        </button>
        <button id="portentage" className="operatorGray">
          %
        </button>
        <button id="divide" className="operatorOrange">
          /
        </button>
      </div>
      <div>
        <button
          id="seven"
          className="operatorBlack"
          value="7"
          onClick={pressNum}
        >
          7
        </button>
        <button
          id="eight"
          className="operatorBlack"
          value="8"
          onClick={pressNum}
        >
          8
        </button>
        <button
          id="nine"
          className="operatorBlack"
          value="9"
          onClick={pressNum}
        >
          9
        </button>
        <button id="multiply" className="operatorOrange" value="x">
          x
        </button>
      </div>
      <div>
        <button
          id="four"
          className="operatorBlack"
          value="4"
          onClick={pressNum}
        >
          4
        </button>
        <button
          id="five"
          className="operatorBlack"
          value="5"
          onClick={pressNum}
        >
          5
        </button>
        <button id="six" className="operatorBlack" value="6" onClick={pressNum}>
          6
        </button>
        <button id="subtract" className="operatorOrange" value="-">
          -
        </button>
      </div>
      <div>
        <button id="one" className="operatorBlack" value="1" onClick={pressNum}>
          1
        </button>
        <button id="two" className="operatorBlack" value="2" onClick={pressNum}>
          2
        </button>
        <button
          id="three"
          className="operatorBlack"
          value="3"
          onClick={pressNum}
        >
          3
        </button>
        <button id="add" className="operatorOrange" value="+">
          +
        </button>
      </div>
      <div>
        <button
          id="zero"
          className="operatorBlack"
          value="0"
          onClick={pressNum}
        >
          0
        </button>
        <button id="decimal" className="operatorBlack" value=".">
          .
        </button>
        <button id="remove" className="operatorBlack" onClick={deleteLastNum}>
          <FontAwesomeIcon icon={faBackspace} />
        </button>
        <button id="equals" className="operatorOrange" value='='>
          =
        </button>
      </div>
    </div>
  );
};

export { Operators };
