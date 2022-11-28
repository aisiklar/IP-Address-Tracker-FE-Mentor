import "./InputField.styles.css";

//contains the input form to take in the user input
// listens for the user input and sends it to Header comp.

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
