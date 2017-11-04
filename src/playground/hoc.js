// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// imagine we wanted some medical information to have a sensitive info warning that came with it
// we can use a HOC to wrap this warning around the usual information component

const UsualInfo = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    ///////////// The HOC //////////////
    return (props) => (
        <div>
            {props.isPrivate && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentification
const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view info</p> }
        </div>
    );
};


const AdminInfo = withAdminWarning(UsualInfo);
const AuthInfo = requireAuthentification(UsualInfo)

// can change isPrivate from true to false dependig on whether we want it be shown
// ReactDOM.render(<AdminInfo isPrivate={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));