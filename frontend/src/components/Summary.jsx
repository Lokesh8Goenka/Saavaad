import React, { useState} from 'react';
import UploadImg from "./UploadImg";
import CountUp from 'react-countup';


const headingStyle = {
  color: "#fff",
  fontFamily: 'Shantell Sans, cursive',
  fontSize: "60px"
}

function Summary(props) {
const [inputText, setInputText] = useState('');
const [resultText, setResultText] = useState('');
const [disable, setDisable] = useState(false);
const [isActive, setIsActive] = useState('true');
const [btntext, setBtntext] = useState('Start');
const [inlength, setINlength] = useState(0);
const [outlength, setOutlength] = useState(0);

// const [visibility, setVisibility] = useState('Show')

// if((props.title)==='More'){
//   setVisibility('Hide');
// } 
// <a href="mailto:goenkalokesh@gmail.com"><i class="fas fa-envelope ftr-icon"></i></a>

const handleSubmit = async (event) => {
  setDisable(true);
  setIsActive(false);
  setBtntext('Processing');
  setINlength(inputText.split(" ").length)
  

  event.preventDefault();
  if (inputText) {
  const response = await fetch('http://192.168.34.133:12345/text_summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: inputText
  })
});
  const resultText = await response.json();

  setResultText(JSON.stringify(resultText));
  setOutlength(resultText.split(" ").length);
  setDisable(false);
  setIsActive(true);
  setBtntext('Start');
}
};

const handleChange = event => {
  setInputText(event.target.value);
};
                                                  

// console.log;
// const [title, setTitle] = useState("")


// function handelProgress() {
//   setProgress('90')
// }

return (
  <div className="summary" id="summary">
    <br />
    <h1 style={headingStyle}>{props.title}</h1>\
    
      
    <div className="container">

        <div>
        <UploadImg /> <br /><br />
        </div>

        <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                    <label htmlFor="text-input"></label>
                    <textarea style={{overflow: "scroll" }}
                        type="text"
                        cols="100" 
                        rows="10"
                        id="text-input"
                        value={inputText}
                        onChange={handleChange}
                    />
                  <h5 style={{color: "#fff"}}>Total Words:
                    <CountUp
                      start={0}
                      end={inlength}
                      duration={3}
                    />
                  </h5>
                </div>
                

                <div className="col">
                  <output style={{color: "Black", backgroundColor: "white", height: "260px", width: "300px"}}>
                      {resultText}
                  </output>
                  <h5 style={{color: "#fff"}}>Total Words: 
                  <CountUp 
                      start={0}
                      end={outlength}
                      duration={3}
                    />
                  </h5>
                </div>
                
              </div>
              <div className="row">
                  <div className="col">
                    <button  className={isActive ? 'submitBtn' : 'submitBtnDisable'} disabled={disable} type="submit">
                        {btntext}
                    </button> <br /><br />
                  </div>
              </div>
            </form>
    </div>
      
</div>
  
);
}

export default Summary;