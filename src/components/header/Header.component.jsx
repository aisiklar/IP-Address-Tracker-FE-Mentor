import InputField from "../input-field/InputField.component";
import InfoBox from "../info-box/InfoBox.component";
import SubmitArrow from "../submit-arrow/SubmitArrow.component";
import "./Header.styles.css";
import { useState } from "react";

const Header = (props) => {
  const [userInput, setUserInput] = useState("");
  //const [ifSubmitted, setIfSubmitted] = useState(false);
  const [dataToFetch, setDataToFetch] = useState("");
  

  // receives userInput from InputField comp and assigns it to userInput
  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  // receives info from SubmitArrow comp, whether the 'submission' is done (button clicked or not). 
  // if button is clicked, send the userinput to InfoBox comp.
  // if button is not clicked, sent empty string to InfoBox comp.
  const ifClickedHandler = (isClicked) => {
//    setIfSubmitted(isClicked);
    if (isClicked === true) {
      setDataToFetch(userInput);
    }
  };

  // receives the coord values from InfoBox and sends it to App.js
  const coordValHandler = (values) => {
    props.mapCoord(values);
  }

  return (
    <div className="header-container">
      <h2 className="app-title">IP Address Tracker</h2>
      <div className="inputField-arrow-wrapper">
        <div className="inputField-wrapper">
          <InputField onChange={onChangeHandler}></InputField>
        </div>
        <div className="submit-arrow-wrapper">
          <SubmitArrow ifClicked={ifClickedHandler}></SubmitArrow>
        </div>
      </div>
      <div className="infobox-wrapper">
        <InfoBox 
          data={dataToFetch} 
          coordVal={coordValHandler}
          ></InfoBox>
      </div>
    </div>
  );
};

export default Header;
