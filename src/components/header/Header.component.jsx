import InputField from "../input-field/InputField.component";
import InfoBox from "../info-box/InfoBox.component";
import SubmitArrow from "../submit-arrow/SubmitArrow.component";
import "./Header.styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="app-title">IP Address Tracker</h2>
      <div className="inputField-arrow-wrapper">
        <div className="inputField-wrapper">
          <InputField></InputField>
        </div>
        <div className="submit-arrow-wrapper">
          <SubmitArrow></SubmitArrow>
        </div>
      </div>
      <div className="infobox-wrapper">
        <InfoBox></InfoBox>
      </div>
    </div>
  );
};

export default Header;
