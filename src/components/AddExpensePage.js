import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// seperate component made for Expense form, so we can reuse it for Edit expense

export class AddExpensePage extends React.Component {
    // seperate onSubmit and mapDispatchToProps functions created so we can test it easier
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={this.onSubmit}
            />
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);