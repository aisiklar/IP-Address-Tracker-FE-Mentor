import "./SubmitArrow.styles.css";
import { useState } from "react";

const SubmitArrow = (props) => {
  const [queryInput, setQueryInput] = useState("");

  const submitHandler = () => {
    setQueryInput(props.inputValue);
    console.log("props.inputValue: ", props.inputValue);
  };

  return (
    <div>
      <input
        className="arrow"
        type="image"
        alt="button"
        src="../../../images/icons8-up-arrow-48.png"
        onClick={submitHandler}
      ></input>
    </div>
  );
};

export default SubmitArrow;
