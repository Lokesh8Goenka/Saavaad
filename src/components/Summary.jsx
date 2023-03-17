import React, { useState} from 'react';
import UploadImg from "./UploadImg";
import Progressbar from './Progress_bar';

function MLModelInput(props) {
const [inputText, setInputText] = useState('');
const [resultText, setResultText] = useState('');

const [loading, setLoading] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();

  if (inputText) {
    setLoading(true);
  const response = await fetch('http://192.168.34.133:12345/summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: inputText
  })
});
  setLoading(false);
  const resultText = await response.json();

  setResultText(JSON.stringify(resultText));

}
};

const handleChange = event => {
  setInputText(event.target.value);
};

const [progress, setProgress] = useState("0")

function handelProgress() {
  setProgress('90')
}

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
                    <textarea style={{marginTop: "50px"}}
                        type="text"
                        cols="100" 
                        rows="10"
                        id="text-input"
                        value={inputText}
                        onChange={handleChange}
                    /> <br /><br />
                    <button className="submitBtn" type="submit">Summarize</button> <br />
                </form>
            </div>
        </div>
        <Progressbar bgcolor="#ff00ff" progress={progress}  height={30} />
        <div className="row">
            <div className="col">
                <output style={{color: "Black", backgroundColor: "white"}}>
                    {resultText}
                </output>
            </div>
        </div>
        // )}
    </div>
      
</div>
  
);
}

export default Summary;