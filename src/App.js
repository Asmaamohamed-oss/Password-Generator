import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css"
import { useState } from 'react';
import Checkbox from './components/Checkbox';
import usePasswordGenerator from './Hoocks/usePasswordGenerator';
import PasswordStrenght from "./components/PasswordStrenght";
import Button from './components/Button';
function App() {
  const [checkBoxDataState, setCheckDataState] = useState([
    { id: 1, title: "Include UpperCase Letters", state: false },
    { id: 2, title: "Include LowerCase Letters", state: false },
    { id: 3, title: "Include Numbers", state: false },
    { id: 4, title: "Include Symbols", state: false }
  ]);
  const [length, setLength] = useState(8);
  const [copied,setCopied] = useState(false)
  const {password,errorMsg,generatePassword} = usePasswordGenerator();
  
  function handelCheckBox(id){
    const updateCheckBoxDate = [...checkBoxDataState]
    updateCheckBoxDate[id-1].state = !updateCheckBoxDate[id-1].state
    setCheckDataState(updateCheckBoxDate)
  }

  ///////copy logic
  function copyText(){
    setCopied(true)
    navigator.clipboard.writeText(password)
    setTimeout(()=>{
      setCopied(false)
    },1000)
  }


  return (
    <div className="App">
      <div className="app-container">
        {password == "" ? (
          ""
        ) : (
          <div className="header">
            <h4 className="password-text">{password}</h4>
            <Button text={copied ? "copied" : "copy"} 
              customClass="btn btn-primary p-1" 
              onClick={copyText}
            />
          </div>
        )}

        <div className="header my-3">
          <h4 className="character-length">Character Length</h4>
          <span style={{ fontSize: "17px" }}>{length}</span>
        </div>
        <input
          type="range"
          className="w-100"
          style={{ cursor: "pointer" }}
          max={20}
          min={4}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <div className="checkboxes my-3">
          {checkBoxDataState.map((check) => (
            <Checkbox
              key={check.id}
              check={check}
              handelCheckBox={handelCheckBox}
            />
          ))}
        </div>
        <div className="header">
          {errorMsg != "" && <h5 style={{ color: "red" }}>{errorMsg}</h5>}
          {password != "" && <PasswordStrenght password={password} />}
        </div>
        <Button
          text="Generate password"
          onClick={() => {
            generatePassword(checkBoxDataState, length);
          }}
          customClass="btn btn-primary generate-btn mt-1"
        />
      </div>
    </div>
  );
}
export default App;
