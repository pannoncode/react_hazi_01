import { useState } from "react";

import "./App.css";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expense/Expenses";

const DUMMY_EXP = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  //const expenseDate = new Date(2022, 9, 12);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = 294.64;

  const [expenses, setExpenses] = useState(DUMMY_EXP);

  const newExpenses = (newExpenses) => {
    setExpenses((items) => {
      return [newExpenses, ...items];
    });
  };

  const deleteItemHandler = (deletedIndex) => {
    expenses.splice(deletedIndex, 1);
    setExpenses((items) => {
      return [...items];
    });
  };

  return (
    <div>
      <h1>My Todos</h1>
      <NewExpenses newExpenses={newExpenses} />
      <Expenses items={expenses} deleteItemHandler={deleteItemHandler} />
    </div>
  );
}

export default App;
