import React, { useState} from 'react';
import UploadImg from "./UploadImg";
import Progressbar from './Progress_bar';

function Summary(props) {
const [inputText, setInputText] = useState('');
const [resultText, setResultText] = useState('');
const [disable, setDisable] = useState(false);
const [isActive, setIsActive] = useState('true');
const [btntext, setBtntext] = useState('Summarize');
const [loading, setLoading] = useState('0');

const handleSubmit = async (event) => {
  setDisable(true);
  setIsActive(false);
  setBtntext('Processing');

  event.preventDefault();

  if (inputText) {
    // setLoading(true);
    setLoading('20');
  const response = await fetch('http://192.168.34.133:12345/text_summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: inputText
  })
});
  // setLoading(false);
  const resultText = await response.json();

  setResultText(JSON.stringify(resultText));
  setDisable(false);
  setIsActive(true);
  setBtntext('Sumarize');
  setLoading('100');
}
};

const handleChange = event => {
  setInputText(event.target.value);
};

// const [progress, setProgress] = useState("0")

// function handelProgress() {
//   setProgress('90')
// }

return (
  <div className="summary">
    <h1 style={{color: "white"}}>Summary</h1>
    <UploadImg />

    <div className="container">
    {/* {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : ( */}
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text-input"></label>
                    <textarea style={{marginTop: "50px", overflow: "scroll" }}
                        type="text"
                        cols="100" 
                        rows="10"
                        id="text-input"
                        value={inputText}
                        onChange={handleChange}
                    /> <br /><br />
                    <button  className={isActive ? 'submitBtn' : 'submitBtnDisable'} disabled={disable} type="submit">
                      {btntext}
                    </button> <br />
                </form>
            </div>
        </div>
        <Progressbar className="progress" bgcolor="#ff00ff" progress={loading}  height={30} />
        <div className="row">
            <div className="col">
                <output style={{color: "Black", backgroundColor: "white"}}>
                    {resultText}
                </output>
            </div>
        </div>
    </div>
      
</div>
  
);
}

export default Summary;