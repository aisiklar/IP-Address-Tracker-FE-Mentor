import "./SubmitArrow.styles.css";
import arrow from "../../images2/icon-arrow.svg";

const SubmitArrow = (props) => {

  // listens for the button click and sends the bool value to Header comp.
  const submitHandler = (event) => {
    props.ifClicked(true);
  };

  return (
    <div className="arrow-container">
      <button>
        {" "}
        <img src={arrow} alt="arrow" onClick={submitHandler}></img>
      </button>
    </div>
  );
};

export default SubmitArrow;