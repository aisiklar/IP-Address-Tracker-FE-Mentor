import "./InfoBox.styles.css";
import FetchedData from "./FetchedData.component";

const InfoBox = () => {

  
  return (
    <div className="infobox-data-wrapper">
      <FetchedData text="IP ADDRESS" data="IP Address"></FetchedData>
      <FetchedData text="LOCATION" data="NY"></FetchedData>
      <FetchedData text="TIMEZONE" data="timezone"></FetchedData>
      <FetchedData text="ISP" data="ISP"></FetchedData>
    </div>
  );
};

export default InfoBox;
