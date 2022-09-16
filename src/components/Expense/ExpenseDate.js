import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const years = props.date.getFullYear();
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const days = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{years}</div>
      <div className="expense-date__month">{months}</div>
      <div className="expense-date__day">{days}</div>
    </div>
  );
};

export default ExpenseDate;
