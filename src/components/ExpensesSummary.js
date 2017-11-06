import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenseString = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('0,0.00')
    return (
        <div>
            <h2>Viewing {props.expensesCount} {expenseString} totalling £{formattedExpensesTotal}</h2>
        </div>     
    );
};  

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesCount: visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

