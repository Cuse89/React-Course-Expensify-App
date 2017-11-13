// Expenses Reducer

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
        //filter - if result of function is true, element in array will be kept, visa versa
        // in this case they are not not the same, so it is false, and will be deleted
            return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses
        default:
            return state;
    }
}; 