import React, { useState } from "react";
import BudgetControl from "./components/BudgetControl";
import BudgetDefinition from "./components/BudgetDefinition";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Expense } from "./types";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  /**
   * Add expense to list
   * @param expense Expense to add
   */
  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
    setRemaining(remaining - expense.amount);
  };

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="content-main">
          {budget <= 0 ? (
            <BudgetDefinition
              setBudget={setBudget}
              setRemaining={setRemaining}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <ExpenseForm addNewExpense={addExpense} />
              </div>
              <div className="one-half column">
                <ExpenseList expenses={expenses} />

                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
