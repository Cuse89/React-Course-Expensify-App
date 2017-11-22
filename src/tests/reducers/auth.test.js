import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = '1234abcd'
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(uid);
});

test('should clear uid for logout', () => {
    const uid = '1234abcd'
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});