import React, { useState } from "react";
import BudgetDefinition from "./components/BudgetDefinition";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

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
                <ExpenseForm />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
