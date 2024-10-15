import { useState } from "react";
import "./App.css";
import CalculatorContainer from "./CalculatorContainer";
import ReasultContainer from "./ReasultContainer";

function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState(null);

  function handleMortgageAmount(e) {
    setMortgageAmount(e.target.value);
  }

  function handleMortgageTerm(e) {
    setMortgageTerm(e.target.value);
  }

  function handleInterestRate(e) {
    setInterestRate(e.target.value);
  }

  function handleMortgageType(e) {
    setMortgageType(e.target.value);
  }

  function clearAll() {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType(null); // Reset mortgage type as well
  }

  return (
    <div className="container">
      <div className="calculator-container">
        <CalculatorContainer
          mortgageAmount={mortgageAmount}
          handleMortgageAmount={handleMortgageAmount}
          mortgageTerm={mortgageTerm}
          handleMortgageTerm={handleMortgageTerm}
          interestRate={interestRate}
          handleInterestRate={handleInterestRate}
          mortgageType={mortgageType}
          handleMortgageType={handleMortgageType}
          onClickClear={clearAll}
        />
      </div>
      <div className="result-container">
        <ReasultContainer />
      </div>
    </div>
  );
}

export default App;
