import emptyIllustration from "./illustration-empty.svg";
export default function ReasultContainer() {
  return (
    <>
      <img src={emptyIllustration} alt="calculator illustration"></img>
      <h3>Reasult shown here</h3>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </>
  );
}
