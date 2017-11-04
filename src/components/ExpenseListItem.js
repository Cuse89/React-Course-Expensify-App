import React from 'react';
import { Link } from 'react-router-dom';

// dispatch prop is gained from the connect function - seeing as ExpenseList component
// has it, we may as well use it, rather than
export const ExpenseListItem = ({ description, amount, createdAt, id}) => (
    <div>
       <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
       <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;