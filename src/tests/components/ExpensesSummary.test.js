import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

// test('should render ExpensesSummary with 0 expenses', () => {
//     const wrapper = shallow(<ExpensesSummary expensesTotal={0} expenses={[]}/>);
//     expect(wrapper).toMatchSnapshot();
// });

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={2375} expensesCount={1}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={4576} expensesCount={2}/>);
    expect(wrapper).toMatchSnapshot();
});