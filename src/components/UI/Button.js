import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button type={props.type} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
