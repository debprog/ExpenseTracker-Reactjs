import ExpenseItem from "./ExpenseItem";
import React from 'react';
import './ExpensesList.css';
const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">found no expense</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (

                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amt={expense.amt}
                    date={expense.date}
                />


            ))};

        </ul>
    );

};



export default ExpensesList;