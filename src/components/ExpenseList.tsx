import { Expense } from "../types";
import ExpenseRow from "./ExpenseRow";

export interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => (
  <div className="expenses-registered">
    <h2>Expenses</h2>
    {expenses.map((expense) => (
      <ExpenseRow
        key={expense.id}
        expense={expense} />
    ))}
  </div>
);

export default ExpenseList;
