import React, { FormEvent, useState } from "react";
import shortid from "shortid";
import { Expense } from "../types";
import Error from "./Error";

export interface ExpenseFormProps {
    addNewExpense: Function
}

/**
 * This component represents a form to add new expenses to list
 * @returns \<form>
 */
const ExpenseForm: React.FC<ExpenseFormProps> = ({addNewExpense}) => {
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

    //Build expense object
    const expense: Expense = {
        id: shortid.generate(),
        name,
        amount
    }
    console.log(expense);

    //Add expense to list
    addNewExpense(expense);

    //Reset form
    setName('');
    setAmount(0);
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
