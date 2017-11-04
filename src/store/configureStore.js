import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
        const store = createStore(
        combineReducers({ // combineReducers function passed in as first argument
            expenses: expensesReducer, // combineReducers takes an object as an argument - Key: root state name(expenses), Value: the reducer
            filters: filtersReducer
        }),
        // pasted from 'redux devtools extension' github webpage
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};


