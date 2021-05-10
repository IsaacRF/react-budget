import { Expense } from "../types";

export interface ExpenseRowProps {
  expense: Expense;
}

const ExpenseRow: React.FC<ExpenseRowProps> = ({ expense }) => (
  <li className="expenses">
    <p>
        {expense.name}

        <span className="expense">€ {expense.amount}</span>
    </p>
  </li>
);

export default ExpenseRow;
