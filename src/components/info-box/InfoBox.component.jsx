import { useState } from "react";
import "./InfoBox.styles.css";
import FetchedData from "./FetchedData.component";
import { useEffect } from "react";

const InfoBox = (props) => {
  const [ipAddress, setIpAddress] = useState("");
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [coordValues, setCoordValues] = useState([]);

  console.log("InfoBox (re-)render");
  console.log("coordValues in infobox comp: ", coordValues);

  // assigns data to the props coming from Header comp.
  let data = props.data;
  const apiKey = process.env.REACT_APP_IP_API_KEY;
  let inputTypeParam = "";
  const baseUrl =
    "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=" + apiKey;

  // classify whether the input data is email, domain name or ip Address
  // domain sample: google.com
  // ip sample: 8.8.8.8
  const findInputType = (data) => {
    if (data.includes("@")) {
      inputTypeParam = "&email=";
      return inputTypeParam;
    }
    if (data.match(/[0-9]./g) !== null) {
      inputTypeParam = "&ipAddress=";
      return inputTypeParam;
    } else {
      inputTypeParam = "&domain=";
      return inputTypeParam;
    }
  };

  // fetch data from the IP address API
  const getIpData = async () => {

    // call findInputType fnc if the user input is not empty string
    if (data !== "") {
      console.log("user input data is not empty string");
      findInputType(data);
    }
    if (data === "") {
      console.log("the input data is empty string. Return request ip address");
      inputTypeParam = "";
    }

    // if input is empty string (in the case of launch of the app)
    // the api returns the requesters current ip.
    let queryData = baseUrl + inputTypeParam + data;

    try {
      const res = await fetch(queryData);
      const returnData = await res.json();
      await setIpAddress(returnData.ip);
      await setCity(returnData.location.city);
      await setTimezone(returnData.location.timezone);
      await setIsp(returnData.isp);
      await setCoordValues([returnData.location.lat, returnData.location.lng]);
    } catch (error) {
      console.log(error);
    }
  };

  // expected to run this when the props.data change, after 1st render (to prevent infinite rendering)
  // if the 
  useEffect(() => {
    getIpData();
  }, [JSON.stringify(props.data)]);

  // expected to run this when the coordValues change, after 1st render (to prevent infinite rendering)
  useEffect(() => {
    props.coordVal(coordValues);
  }, [JSON.stringify(coordValues)]);

  return (
    <div>
      <div className="infobox-data-container">
        <FetchedData text="IP ADDRESS" data={ipAddress}></FetchedData>
        <FetchedData text="LOCATION" data={city}></FetchedData>
        <FetchedData text="TIMEZONE" data={timezone}></FetchedData>
        <FetchedData text="ISP" data={isp}></FetchedData>
      </div>
    </div>
  );
};

export default InfoBox;
