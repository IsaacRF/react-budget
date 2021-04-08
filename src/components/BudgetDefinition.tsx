import React, { Fragment } from "react";

export interface BudgetDefinitionProps {}

const BudgetDefinition: React.FC<BudgetDefinitionProps> = () => {
  return (
    <Fragment>
      <h2>Set your budget</h2>

      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Initial budget"
        />

        <input
          type="submit"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
};

export default BudgetDefinition;
