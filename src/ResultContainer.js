import emptyIllustration from "./illustration-empty.svg";

export default function ResultContainer({
  repayment,
  totalRepayment,
  totalInterest,
}) {
  // Check if results are available
  const hasResults = repayment > 0 || totalRepayment > 0 || totalInterest > 0;

  return (
    <>
      {hasResults ? (
        <div className="result">
          <h3>Your Results</h3>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="result-data">
            <h4>Your monthly repayments</h4>
            <p id="main-result">${repayment}</p>
            <h4>Total you'll repay over the term</h4>
            <p>${totalRepayment}</p>
            <h4>Total interest paid</h4>
            <p>${totalInterest}</p>
          </div>
        </div>
      ) : (
        <div>
          <img src={emptyIllustration} alt="calculator illustration" />
          <h3>Results shown here</h3>
          <p>
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </>
  );
}
