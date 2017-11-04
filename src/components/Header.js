import React from 'react';
import { NavLink } from 'react-router-dom';

// Link and NavLink (from React Router api) dont do a full page refresh when navigating to a new page, taking advantage of React
// NavLink is good for navigation menus, can style the font weight, color etc
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </header>
);

export default Header;