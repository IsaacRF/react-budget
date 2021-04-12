import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import Error from "./Error";

export interface BudgetDefinitionProps {}

const BudgetDefinition: React.FC<BudgetDefinitionProps> = () => {

  // Define budget definition state
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  /**
   * Set budget state on input changes
   * @param e
   */
  const onChangeBudget = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value, 10) || 0);
  }

  /**
   *
   * @param e
   * @returns
   */
  const onSubmitBudget = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validation
    if (amount < 1) {
      setError(true);
      return;
    }

    setError(false);
  }

  return (
    <Fragment>
      <h2>Set your budget</h2>

      { error && <Error message="Amount is incorrect" />}

      <form onSubmit={onSubmitBudget}>
        <input
          type="number"
          id="budget"
          className="u-full-width"
          placeholder="Initial budget"
          onChange={onChangeBudget}
        />

        <input type="submit" className="button-primary u-full-width" />
      </form>
    </Fragment>
  );
};

export default BudgetDefinition;
