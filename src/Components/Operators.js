import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";


const Operators = ({
  addNum,
  clearDisplay,
  deleteLastNum,
  addDecimal,
 handleOperator,
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
        <button id="divide" className="operatorOrange" value="/" onClick={handleOperator}>
          /
        </button>
        </div>
        <div>
          <button id="portentage" className="operatorOrange" value="%" onClick={handleOperator}>
            %
          </button>
        </div>
     

     
        <div>
          <button
            id="seven"
            className="operatorBlack"
            value="7"
            onClick={addNum}
          >
            7
          </button>
        </div>

        <div>
          <button
            id="eight"
            className="operatorBlack"
            value="8"
            onClick={addNum}
          >
            8
          </button>
        </div>

        <div>
          <button
            id="nine"
            className="operatorBlack"
            value="9"
            onClick={addNum}
          >
            9
          </button>
        </div>

        <div>
          <button
            id="multiply"
            className="operatorOrange"
            value="*"
            onClick={ handleOperator}
          >
            x
          </button>
        </div>
      

      
        <div>
          <button
            id="four"
            className="operatorBlack"
            value="4"
            onClick={addNum}
          >
            4
          </button>
        </div>

        <div>
          <button
            id="five"
            className="operatorBlack"
            value="5"
            onClick={addNum}
          >
            5
          </button>
        </div>

        <div>
          <button
            id="six"
            className="operatorBlack"
            value="6"
            onClick={addNum}
          >
            6
          </button>
        </div>

        <div>
          <button
            id="subtract"
            className="operatorOrange"
            value="-"
            onClick={ handleOperator}
          >
            -
          </button>
        </div>
    

     
        <div>
          <button
            id="one"
            className="operatorBlack"
            value="1"
            onClick={addNum}
          >
            1
          </button>
        </div>

        <div>
          <button
            id="two"
            className="operatorBlack"
            value="2"
            onClick={addNum}
          >
            2
          </button>
        </div>

        <div>
          <button
            id="three"
            className="operatorBlack"
            value="3"
            onClick={addNum}
          >
            3
          </button>
        </div>

        <div>
          <button id="add" className="operatorOrange" value="+" onClick={ handleOperator}>
            +
          </button>
        </div>
      

     
        <div  >
          <button
            id="zero"
            className="operatorBlack"
            value="0"
            onClick={addNum}
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
