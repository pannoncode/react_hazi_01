import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";

const Expenses = (props) => {
  const expensesData = props.items;

  const findDeleteItem = (itemId) => {
    for (const key of expensesData) {
      if (key.id === itemId) {
        let deletedIndex = expensesData.indexOf(key);
        props.deleteItemHandler(deletedIndex);
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
