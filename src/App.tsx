import React, { useState } from "react";
import BudgetDefinition from "./components/BudgetDefinition";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="content-main">
          <BudgetDefinition setBudget={setBudget} setRemaining={setRemaining} />
        </div>
      </header>
    </div>
  );
}

export default App;
