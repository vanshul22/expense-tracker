import React, { useState } from 'react';
// import { useEffect } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense';

// Example variable for tests.
let dummyExpenses = [{ id: 'e1', title: 'School fee', amount: '100', date: new Date(2021, 1, 10) },
{ id: 'e2', title: 'College fee', amount: '200', date: new Date(2021, 2, 11) },
{ id: 'e3', title: 'Hostel fee', amount: '300', date: new Date(2021, 3, 12) },
{ id: 'e4', title: 'Library fee', amount: '400', date: new Date(2021, 4, 13) },];

const App = () => {
    const [expenses, setExpenses] = useState(dummyExpenses);

    /*
    fetchData = () => {
        // Fetching data from database. But we dont have data base so we will comment it out. Use effect run fetch API only once other wise it will run in infinite loop. Taking 2 params 1 arrow func and second an blank array. If we put anything in array it will goes to loop.
        fetch('http://').then(response => response.json()).then(data => setExpenses(data));
    }
    useEffect(() => { fetchData() }, []);
    */



    // taking data from Child from here
    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
        // fetch('https://', { method: 'POST', body: JSON.stringify(expense), headers: { 'content-Type': 'application/JSON' } }).then(response => fetchData())
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
};

export default App;