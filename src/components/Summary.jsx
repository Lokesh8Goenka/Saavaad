import React, { useState} from 'react';

const sumStyle = {
    fontFamily: "'Shantell Sans', cursive",
    color: "#fff",
    marginLeft: "10vw",
    paddingTop: "10vh",
    fontSize: "6vw"
}

function MLModelInput() {
const [inputText, setInputText] = useState('');
const [resultText, setResultText] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();

  if (inputText) {
  const response = await fetch('http://192.168.34.133:12345/summarize', {
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
}
};

const handleChange = event => {
  setInputText(event.target.value);
};



return (
  <div className="summary">
    <div className="container">
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
                    /> <br />
                    <button className="submitBtn" type="submit">Summarize</button> <br />
                </form>
            </div>
        </div>
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

export default MLModelInput;
