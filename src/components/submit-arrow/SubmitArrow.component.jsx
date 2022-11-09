import "./SubmitArrow.styles.css";
import { useState } from "react";

const SubmitArrow = (props) => {
  //console.log('props.ifClicked: ', props.ifClicked);
 
//  const [arrowClicked, setArrowClicked] = useState(false);

  const submitHandler = (event) => {
    console.log('button clicked');
    console.log('event: ', event);
    props.ifClicked(true);
  }
  
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
