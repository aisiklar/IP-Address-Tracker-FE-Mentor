import "./InfoBox.styles.css";
import FetchedData from "./FetchedData.component";
import API_KEY from "../../.secret";

const InfoBox = (props) => {

  console.log('props.data: ', props.data);
  console.log('env. variable: ',process.env.REACT_APP_IP_API_KEY);
  //console.log('API_KEY: ', API_KEY);
  
  return (
    <div className="infobox-data-container">
      <FetchedData text="IP ADDRESS" data="IP Address"></FetchedData>
      <FetchedData text="LOCATION" data="NY"></FetchedData>
      <FetchedData text="TIMEZONE" data="timezone"></FetchedData>
      <FetchedData text="ISP" data="ISP"></FetchedData>
    </div>
  );
};

export default InfoBox;
