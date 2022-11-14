import { useState } from "react";
import "./InfoBox.styles.css";
import FetchedData from "./FetchedData.component";
//import API_KEY from "../../.secret";

const InfoBox = (props) => {
  const [ipAddress, setIpAddress] = useState("");
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");

  //console.log('ipAddress, city, timezone, isp: ', ipAddress, city, timezone, isp);

  console.log("props.data: ", props.data);
  //console.log(' env. variable: ',process.env.REACT_APP_IP_API_KEY);

  let data = props.data;
  console.log("data and the type: ", data, typeof data);
  const apiKey = process.env.REACT_APP_IP_API_KEY;
  let inputTypeParam = "";
  const baseUrl =
    "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=" + apiKey;

  // domain sample: google.com
  // ip sample: 8.8.8.8
  // classify whether the input data is domain name or ip Address
  const findInputType = (data) => {
    if (data.includes("@")) {
      console.log("input data type: email");
      inputTypeParam = 'email';
    }

    if (data.matchAll(/[a-z]/gi).length >= 1) {
      console.log(data.matchAll(/[a-z]/gi));
      console.log("input data type: domain");
      inputTypeParam = 'domain';
    }

    if (data.match(/[0-9], ./) >= 1) {
      console.log("input data type: ip address");
      inputTypeParam = 'ipAddress';
    }
    return inputTypeParam;
  };

  if (data !== "") {
    console.log("whether the user input data is not empty string");
    findInputType(data);
  }
  if (data == '') {
    console.log('the input data is empty string. Return request ip address');
    inputTypeParam = '';
  }

  console.log('inputTypeParam: ', inputTypeParam);

  const getIpData = async () => {
    //findInputType(data);
    let queryData = baseUrl + inputTypeParam + data;
    console.log('queryData: ', queryData);

    try {
      const res = await fetch(queryData);
      const returnData = await res.json();
      //await console.log("response from the ip API: ", returnData);
      await setIpAddress(returnData.ip);
      await setCity(returnData.location.city);
      await setTimezone(returnData.location.timezone);
      await setIsp(returnData.isp);
    } catch (error) {
      console.log(error);
    }
  };

  //getIpData();

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
