
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react'
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'snacks',
    amt: 94.12,
    date: new Date(2021, 1, 1)
  },

  {
    id: 'e2',
    title: 'chai',
    amt: 15,
    date: new Date(2020, 1, 1)
  }
]


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />


    </div>



  );
}

export default App;
