import { useState } from "react";
import "./App.css";
import CalculatorContainer from "./CalculatorContainer";
import ResultContainer from "./ResultContainer";

function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [repayment, setRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Handlers for form input values
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

  // Repayment mortgage calculation
  function handleRepayment() {
    let principal = parseFloat(mortgageAmount); // Mortgage amount (P)
    let annualRate = parseFloat(interestRate) / 100; // Convert percentage to decimal
    let monthlyRate = annualRate / 12; // Monthly interest rate (r)
    let numberOfPayments = mortgageTerm * 12; // Total number of payments (n)

    // Calculate monthly repayment using the amortization formula
    let monthlyRepayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    // Calculate total repayment over the term
    let totalRepayment = monthlyRepayment * numberOfPayments;

    // Calculate total interest paid over the term
    let totalInterest = totalRepayment - principal;

    // Update state values
    setRepayment(monthlyRepayment.toFixed(2)); // Store the monthly repayment
    setTotalRepayment(totalRepayment.toFixed(2)); // Store the total repayment
    setTotalInterest(totalInterest.toFixed(2)); // Store the total interest paid
  }

  // Interest-only mortgage calculation
  function handleInterestOnly() {
    let principal = parseFloat(mortgageAmount); // Mortgage amount (P)
    let annualRate = parseFloat(interestRate) / 100; // Convert percentage to decimal
    let monthlyRate = annualRate / 12; // Monthly interest rate (r)
    let numberOfPayments = mortgageTerm * 12; // Total number of payments (n)

    // Calculate interest-only monthly payment
    let interestOnlyPayment = principal * monthlyRate;

    // Total interest paid is just the monthly interest * number of payments
    let totalInterestPaid = interestOnlyPayment * numberOfPayments;

    // Total repayment is the original principal + total interest paid
    let totalRepaymentAmount = principal + totalInterestPaid;

    // Update state with calculated values
    setRepayment(interestOnlyPayment.toFixed(2)); // Store the monthly interest-only payment
    setTotalRepayment(totalRepaymentAmount.toFixed(2)); // Store the total repayment (principal + interest)
    setTotalInterest(totalInterestPaid.toFixed(2)); // Store the total interest paid
  }

  // Handle form submission based on the mortgage type selected
  function onSubmit(e) {
    e.preventDefault();

    if (!mortgageAmount || !mortgageTerm || !interestRate || !mortgageType) {
      alert("Please fill out all fields before calculating.");
      return;
    }

    if (mortgageType === "repayment") {
      handleRepayment();
    } else if (mortgageType === "interestOnly") {
      handleInterestOnly();
    }
  }

  // Clear all inputs and results
  function clearAll() {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType(""); // Reset mortgage type
    setRepayment(0);
    setTotalRepayment(0);
    setTotalInterest(0);
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
          onClick={onSubmit}
        />
      </div>
      <div className="result-container">
        <ResultContainer
          repayment={repayment}
          totalRepayment={totalRepayment}
          totalInterest={totalInterest}
        />
      </div>
    </div>
  );
}

export default App;
