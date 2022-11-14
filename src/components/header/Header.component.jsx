import InputField from "../input-field/InputField.component";
import InfoBox from "../info-box/InfoBox.component";
import SubmitArrow from "../submit-arrow/SubmitArrow.component";
import "./Header.styles.css";
import { useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const Header = () => {
  const [userInput, setUserInput] = useState("");
  const [ifSubmitted, setIfSubmitted] = useState(false);
  const [dataToFetch, setDataToFetch] = useState("");

  console.log("ifSubmitted: ", ifSubmitted);

  const onChangeHandler = (e) => {
    //console.log('e.target.value: ', e.target.value);
    setUserInput(e.target.value);
  };

  const ifClickedHandler = (isClicked) => {
    console.log("isClicked: ", isClicked);
    setIfSubmitted(isClicked);
    if (isClicked === true) {
      console.log("if Submitted is true, changing the state dataToFetch");
      setDataToFetch(userInput);
    }
  };

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
        <InfoBox data={dataToFetch}></InfoBox>
      </div>
    </div>
  );
};

export default Header;
