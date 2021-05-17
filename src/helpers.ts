export const getBudgetColorClass = (budget: number, remaining: number) => {
    if ((budget / 4) >= remaining) {
        return 'alert alert-danger';
    } else if ((budget / 2) >= remaining) {
        return 'alert alert-warning';
    } else {
        return 'alert alert-success';
    }
}