import React, { useState } from "react";

export interface ExpenseFormProps {}

const ExpenseForm: React.FC<ExpenseFormProps> = () => {
  return (
    <form>
      <h2>Add Expense</h2>

      <div className="field">
        <label>Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g. Restaurant Lunch"
        />
      </div>

      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="e.g. 300"
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
        />
    </form>
  );
};

export default ExpenseForm;
