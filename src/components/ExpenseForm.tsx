import { stringify } from "node:querystring";
import React, { FormEvent, useState } from "react";
import Error from "./Error";

export interface ExpenseFormProps {}

const ExpenseForm: React.FC<ExpenseFormProps> = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(amount);
    console.log(name);

    //Validation
    if (amount < 1 || name === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add Expense</h2>

      {error &&
        <Error message="Amount or name not set" />
      }

      <div className="field">
        <label>Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g. Restaurant Lunch"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="e.g. 300"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value, 10) || 0)}
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
