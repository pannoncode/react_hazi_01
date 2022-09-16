import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/Button";

const ExpenseItems = (props) => {
  const deleteItem = () => {
    props.delete(props.id);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <Button type="submit" title="Delete" onClick={deleteItem} />
    </div>
  );
};

export default ExpenseItems;
