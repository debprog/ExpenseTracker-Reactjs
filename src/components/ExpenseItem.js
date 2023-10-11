import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React, { useState } from 'react';
function ExpenseItem(props) {

    // const [title, settitle] = useState(props.title)

    // const ctitle = () => {
    //     settitle("changed");
    // }


    return (
        <li>
            <Card className="expense-item">

                <ExpenseDate date={props.date} />


                <div className="expense-item__description"></div>
                <h2> {props.title}</h2>
                <div className="expense-item__price">{props.amt}</div>
                {/* <button onClick={ctitle}>change title</button> */}

            </Card>
        </li>
    )


}

export default ExpenseItem;