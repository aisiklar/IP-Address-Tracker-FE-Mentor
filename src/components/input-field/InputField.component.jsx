import "./InputField.styles.css";

const InputField = (props) => {
  return (
    <div className="inputfield-container">
      <input
        className="input-area"
        type="search"
        placeholder="Enter domain or IP number"
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default InputField;
