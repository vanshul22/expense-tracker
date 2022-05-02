import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <div className='expenses'>{
            props.item.map(expense => (
                //  Added below components and sending data to components
                <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
            ))}
        </div>
    );
};

export default Expenses;