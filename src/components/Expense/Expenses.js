import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";

const Expenses = (props) => {
  const [expensesData, setExpensesData] = useState(props.items);

  const findDeleteItem = (itemId) => {
    for (const key of expensesData) {
      if (key.id === itemId) {
        let deletedIndex = expensesData.indexOf(key);
        expensesData.splice(deletedIndex, 1);
        setExpensesData((items) => {
          return [...items];
        });
      }
    }
  };

  return (
    <Card>
      {expensesData.map((item) => (
        <ExpenseItems
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          delete={findDeleteItem}
        />
      ))}
    </Card>
  );
};

export default Expenses;
