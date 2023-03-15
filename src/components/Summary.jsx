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
  // Send the input text to the ML model API endpoint
    const response = await fetch('http://192.168.34.133:12345/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: inputText
     })
    });

    // Parse the response as text
    const resultText = await response.json();

    // Update the result state variable with the API response
    setResultText(JSON.stringify(resultText));
  }

  if(Image){
    //Send the image to ml model model to detect the text and summarize
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://192.168.34.133:12345/image_text_summarize', {
      method: 'POST',
      body: formData
    });

    const imageText = await response.json();
 
    // Update the result state variable with the API response
    setResultText(JSON.stringify(imageText));
  }
};

const handleChange = event => {
  setInputText(event.target.value);
};

return (
  <div className="summary">
    <h1 style={sumStyle}>Summary...</h1>
    <div className="row">
      <div className="col" style={{padding: "0"}}>
      <form onSubmit={handleSubmit}>
                  <button className="submitBtn" type="submit">Submit</button>
                  <label style={{color: "#fff", float: "right", marginRight: "10vw"}}> 
                  <textarea style={{backgroundColor: "transparent", color: "white"}}
                    type="text"
                    id="text-input"
                    defaultValue="Your Text Here"
                    rows={10}
                    cols={100}
                    value={inputText}
                    onChange={handleChange}
                  />
                  </label>
      </form>
      </div>
    </div>
    <div className="row">
    <div className="col" style={{padding: "0"}}>
      <output style={{backgroundColor: "transparent", color: "white", margin: "20px"}}>
      {resultText}
    </output>
      </div>
    </div>
    
   
  </div>
);
}

export default MLModelInput;