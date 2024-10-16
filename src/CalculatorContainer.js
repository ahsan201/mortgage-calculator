import Button from "./Button";
import FormInput from "./FormInput";

export default function CalculatorContainer({
  mortgageAmount,
  handleMortgageAmount,
  mortgageTerm,
  handleMortgageTerm,
  interestRate,
  handleInterestRate,
  mortgageType,
  handleMortgageType,
  onClickClear,
  onClick,
}) {
  return (
    <>
      <div className="title">
        <h3>Mortgage Calculator</h3>
        <span className="clearBTN" onClick={onClickClear}>
          Clear All
        </span>
      </div>
      <form onSubmit={onClick}>
        <FormInput
          iconFirst={true}
          icon="$"
          value={mortgageAmount}
          onChange={handleMortgageAmount}
        >
          Mortgage Amount
        </FormInput>

        <div className="other-input">
          <div>
            <FormInput
              iconFirst={false}
              icon="Year"
              value={mortgageTerm}
              onChange={handleMortgageTerm}
            >
              Mortgage Term
            </FormInput>
          </div>
          <div>
            <FormInput
              iconFirst={false}
              icon="%"
              value={interestRate}
              onChange={handleInterestRate}
            >
              Interest Rate
            </FormInput>
          </div>
        </div>
        <div>
          <label>Mortgage Type</label>
          <div className="type">
            <input
              type="radio"
              name="type"
              value="repayment"
              checked={mortgageType === "repayment"}
              onChange={handleMortgageType}
            />
            <label>Repayment</label>
          </div>
          <div className="type">
            <input
              type="radio"
              name="type"
              value="interestOnly"
              checked={mortgageType === "interestOnly"}
              onChange={handleMortgageType}
            />
            <label>Interest Only</label>
          </div>
        </div>
        <Button type="submit">Calculate Repayment</Button>
      </form>
    </>
  );
}
