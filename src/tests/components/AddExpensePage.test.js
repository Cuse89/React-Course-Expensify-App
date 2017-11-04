import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
// beforeEach allows us to run some code (in this case building the test case up), before we run the test assertions (following DRY)
beforeEach(() => {
    // Spies
    addExpense = jest.fn();
    // since on AddExpensePage its history.push, push is an object...
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly' , () => {
    // beforeEach function will run (DRY)
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit' , () => {
    // beforeEach function will run (DRY)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});