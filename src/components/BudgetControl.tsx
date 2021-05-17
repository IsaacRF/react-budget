import { getBudgetColorClass } from "../helpers";

export interface BudgetControlProps {
  budget: number;
  remaining: number;
}

const BudgetControl: React.FC<BudgetControlProps> = ({ budget, remaining }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: € {budget}</div>
      <div className={getBudgetColorClass(budget, remaining)}>Remaining: € {remaining}</div>
    </>
  );
};

export default BudgetControl;
