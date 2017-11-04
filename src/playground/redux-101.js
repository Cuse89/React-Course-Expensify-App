// Redux allows us to contain all the state changes in one area and we can change the state
// from anywhere in the app - means we dont need to pass props down various components
// simple just to change a state. It also allows for a much more flexible app, meaning that
// each component can be completely REUSABLE around the app because they aren't relying
// on props being passed in, which may not exist in all locations around an app

import { createStore } from 'redux';

///////////// Action generators - functions that return action objects ////////

// default amount for num is an empty object

// const incrementCount = (num = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof num.incrementBy === 'number' ? num.incrementBy : 1
// });
// is 'destructured' and also simplified to:

const incrementCount = ({num = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: num
});

// is also the same as:  (because the object property (decrementBy) is the same name as the variable name)
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// {setTo} is basically the destructured version of lets say argument.setTo - it is creating a variale called setTo from the argument object
const setCount = ({setTo} = {}) => ({
    type: 'SET',
    setTo
});

const resetCount = () => ({
    type: 'RESET'
});

////////////// Reducers - specifies how the applications state changes
// 1. Reducers are PURE functions - its output is only determined by its input, nothing else
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setTo
            };    
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// .subscribe looks out for changes within the store
store.subscribe(() => {
    console.log(store.getState());
});

// to Unsubscribe we can use the return value from Subscribe by attaching it to a variable and calling the variable:
// const unsubscribeeee = store.subscribe(() => {
//     console.log(store.getState());
// });
// unsubscribeee();
// Now the subscribe function will not be used from now on i.e when anything is 'dispatched'





/////////////////// Actions - an object that gets sent to the store /////////////////

// example below without using the Action generator

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 7
// });

store.dispatch(incrementCount( {incrementBy: 4} )); // this will add 4
store.dispatch(incrementCount()); // this will add the default amount of 1
store.dispatch(decrementCount());
store.dispatch(decrementCount( {decrementBy: 6} ));
store.dispatch(setCount( {setTo: 101} ));
store.dispatch(resetCount());
