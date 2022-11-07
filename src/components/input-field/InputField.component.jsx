import { Component } from "react";
import "./InputField.styles.css";
import InputArea from "../input-area/InputArea.component";
import SubmitArrow from "../submit-arrow/SubmitArrow.component";

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  componentDidMount() {
    //
  }

  render() {
    const onChangeHandler = (e) => {
      console.log(e.target.value);
      this.setState(
        ()=> {
        return { userInput: e.target.value }
      },  
      () => {
        console.log('this.state.userInput: ', this.state.userInput)
      })
    };

    return (
      <div className="inputfield-container">
        <h2>IP Address Tracker</h2>
        <div>
          <div className="input-area-wrapper">
            <InputArea onChange={onChangeHandler}></InputArea>
          </div>
          <div className="submit-arrow-wrapper">
            <SubmitArrow inputValue={this.state.userInput}></SubmitArrow>
            </div>
        </div>
      </div>
    );
  }
}

export default InputField;
