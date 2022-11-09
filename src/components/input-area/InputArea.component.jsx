import { Component } from "react";
import "./InputArea.styles.css";

class InputArea extends Component {

  console.log();

  render() {
    return (
      <input
        className="input-area"
        type="search"
        placeholder="Enter domain or IP number"
        onChange={this.props.onChange}
      ></input>
    );
  }
}

export default InputArea;
