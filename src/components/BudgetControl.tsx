export interface BudgetControlProps {
    budget: number;
    remaining: number;
}

const BudgetControl: React.FC<BudgetControlProps> = ({budget, remaining}) => {
    return (
        <>
            <div className="alert alert-primary">
                Budget: € {budget}
            </div>
            <div className="alert">
                Remaining: € {remaining}
            </div>
        </>
    );
}

export default BudgetControl;