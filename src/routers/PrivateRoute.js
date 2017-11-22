import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';



export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //when destructuring, creates a variable named 'rest' (could be named anything) containing the all the other elements that weren't destuctured
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
            
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // will return true/false
});

export default connect(mapStateToProps)(PrivateRoute);