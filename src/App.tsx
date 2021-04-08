import React from "react";
import BudgetDefinition from "./components/BudgetDefinition";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="content-main">
          <BudgetDefinition />
        </div>
      </header>
    </div>
  );
}

export default App;
