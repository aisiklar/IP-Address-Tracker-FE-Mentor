import "./SubmitArrow.styles.css";
import { useState } from "react";
import arrow from '../../images2/icon-arrow.svg';

const SubmitArrow = (props) => {
  //console.log('props.ifClicked: ', props.ifClicked);
 
//  const [arrowClicked, setArrowClicked] = useState(false);

  const submitHandler = (event) => {
    console.log('button clicked');
    console.log('event: ', event);
    props.ifClicked(true);
  }
  
  return (
    <div className="arrow-container">
      <input
        className="arrow"
        alt="button"
        onClick={submitHandler}
      ></input>
    </div>
  );
};

export default SubmitArrow;
