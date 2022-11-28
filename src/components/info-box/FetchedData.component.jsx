import "./FetchedData.styles.css";

const FetchedData = (props) => {
  return (
    <div className="fetchdata-container">
      <h3>{props.text}</h3>
      <p>{props.data}</p>
    </div>
  );
};

export default FetchedData;
