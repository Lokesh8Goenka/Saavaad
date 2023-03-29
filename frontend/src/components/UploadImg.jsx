import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');
  const [select, setSelect] = useState("Select Image");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setSelect("Image Selected");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("reached");
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file', file);

    fetch('http://192.168.34.133:12345/image_text_summarize', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => setOutput(data))
      .catch(error => console.log(error));
  };  
  //new codes
  
  

  return (
    <div className="imgUpload"><br /><br />
      {/* <h1 style={{color: "white"}}>Image Upload</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
          <label id="fileUpload" htmlFor="file" className="btn">{select}</label>
            <input id="file"
              type="file"
              style={{visibility: "hidden"}}
              onChange={handleFileChange}
            />
          </div>
          <div className="col">
            <button className="submitBtn" style={{borderRadius: "20px", height: "50px", fontSize: "35px",  marginTop: "0px"}} type="submit">Upload</button>
          </div>
          <div className="col">
              <output style={{color: "Black", backgroundColor: "white", height: "60px", width: "300px"}}>{output}</output>
          </div>

        </div>
      </form>
      
    </div>
  );
}

export default App;