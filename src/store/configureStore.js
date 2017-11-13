import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
        const store = createStore(
        combineReducers({ // combineReducers function passed in as first argument
            expenses: expensesReducer, // combineReducers takes an object as an argument - Key: root state name(expenses), Value: the reducer
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


