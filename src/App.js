import './App.css';
import InputField from './components/input-field/InputField.component';
import InfoBox from './components/info-box/InfoBox.component';


function App() {
  return (
    <div className="App">
      <InputField></InputField>
      <InfoBox></InfoBox>
      <MapDisplay></MapDisplay>
    </div>)
}

export default App;
