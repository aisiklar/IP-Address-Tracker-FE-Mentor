import "./InfoBox.styles.css";
import FetchedData from "./FetchedData.component";
//import API_KEY from "../../.secret";

const InfoBox = (props) => {
  console.log("props.data: ", props.data);
  //console.log(' env. variable: ',process.env.REACT_APP_IP_API_KEY);

  const data = props.data;
  const apiKey = process.env.REACT_APP_IP_API_KEY;
  const baseUrl = "https://geo.ipify.org/api/v2/country?apiKey=" + apiKey;
  //  console.log("queryData: ", queryData);

  const getIpData = async () => {
    
    // classify the incoming "data", whether it is an ip address or a domain name...

    let queryData = baseUrl + data;
    
    try {
      const res = await fetch(queryData);
      const returnData = await res.json();

      await console.log("response from the ip API: ", returnData);
    } catch (error) {
      console.log(error);
    }
  };

  getIpData();

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
