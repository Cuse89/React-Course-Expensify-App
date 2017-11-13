import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'incorrect id'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
            id: '109',
            description: 'test',
            note: '',
            amount: 200,
            createdAt: 1000
        };
    const action = {
        type: 'ADD_EXPENSE',
        expense 
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'new description',
            note: 'new note',
            amount: 500,
            createdAt: 1000 
        }  
    };
    const editedExpense = {
        id: expenses[1].id,
        description: 'new description',
        note: 'new note',
        amount: 500,
        createdAt: 1000
    }
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual(editedExpense)
});

test('should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'incorrect id',
        updates: {
            description: 'new description',
            note: 'new note',
            amount: 500,
            createdAt: 1000 
        }  
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]  
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]]);
});