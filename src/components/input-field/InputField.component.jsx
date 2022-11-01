import { Component } from 'react';
import "./InputField.styles.css";

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      IpInput: "",
    };
  }

  componentDidMount() {

  }

  render() {

    const onChangeHandler = (e) => {
        console.log(e);
    }

    return (
      <div className="inputfield-container">
        <h2>IP Address Tracker</h2>
        <div className="input-area">
          <input
            className="input-field"
            type="search"
            placeholder="Enter domain or IP number"
            onChange={onChangeHandler}
          ></input>
          {/*                 <SubmitArrow></SubmitArrow> */}
        </div>
      </div>
    );
  }
}

export default InputField;
