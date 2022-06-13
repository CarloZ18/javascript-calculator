import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";


const Operators = ({
  pressNum,
  clearDisplay,
  deleteLastNum,
  addDecimal,
  porcentage,
  divide,
  subtract,
  sum,
  multiply,
  equal,
}) => {
  return (
    <div id="container">
      
        <div>
          <button id="clear" className="operatorGray" onClick={clearDisplay}>
            C
          </button>
        </div>
        <div>
          <button id="remove" className="operatorGray" onClick={deleteLastNum}>
            <FontAwesomeIcon icon={faBackspace} />
          </button>
        </div>
        <div>
        <button id="divide" className="operatorOrange" onClick={divide}>
          /
        </button>
        </div>
        <div>
          <button id="portentage" className="operatorOrange" onClick={porcentage}>
            %
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
        </div>

        <div>
          <button
            id="eight"
            className="operatorBlack"
            value="8"
            onClick={pressNum}
          >
            8
          </button>
        </div>

        <div>
          <button
            id="nine"
            className="operatorBlack"
            value="9"
            onClick={pressNum}
          >
            9
          </button>
        </div>

        <div>
          <button
            id="multiply"
            className="operatorOrange"
            value="."
            onClick={multiply}
          >
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
        </div>

        <div>
          <button
            id="five"
            className="operatorBlack"
            value="5"
            onClick={pressNum}
          >
            5
          </button>
        </div>

        <div>
          <button
            id="six"
            className="operatorBlack"
            value="6"
            onClick={pressNum}
          >
            6
          </button>
        </div>

        <div>
          <button
            id="subtract"
            className="operatorOrange"
            value="-"
            onClick={subtract}
          >
            -
          </button>
        </div>
    

     
        <div>
          <button
            id="one"
            className="operatorBlack"
            value="1"
            onClick={pressNum}
          >
            1
          </button>
        </div>

        <div>
          <button
            id="two"
            className="operatorBlack"
            value="2"
            onClick={pressNum}
          >
            2
          </button>
        </div>

        <div>
          <button
            id="three"
            className="operatorBlack"
            value="3"
            onClick={pressNum}
          >
            3
          </button>
        </div>

        <div>
          <button id="add" className="operatorOrange" value="+" onClick={sum}>
            +
          </button>
        </div>
      

     
        <div  >
          <button
            id="zero"
            className="operatorBlack"
            value="0"
            onClick={pressNum}
          >
            0
          </button>
        </div>

        <div >
          <button
            id="decimal"
            className="operatorBlack"
            value="."
            onClick={addDecimal}
          >
            .
          </button>
        </div>

        <div className="jumboEqual" >
          <button
            id="equals"
            className="operatorOrange"
            value="="
            onClick={equal}
          >
            =
          </button>
        </div>
      
    </div>
  );
};

export { Operators };
