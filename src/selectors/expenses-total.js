export default (expenses) => {
    const amounts = expenses.map((expense) => {
        return expense.amount
    })
    const total = amounts.reduce((sum, value) => sum + value, 0)
    return total
};
        
