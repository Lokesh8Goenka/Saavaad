import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');
  const [select, setSelect] = useState("Select Image");
  const [btntext, setBtntext] = useState("Upload");
  const [isActive, setIsActive] = useState(true);
  const [twocols, setTwoCols] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setSelect("Image Selected");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsActive(false);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file', file);

    fetch('http://172.28.0.12:12345/image_text_summarize', {
      method: 'POST',
      body: formData
    })
    setTwoCols(true)
      .then(response => response.text())
      .then(data => setOutput(data))
      .catch(error => console.log(error));
      setIsActive(true);
      setBtntext("Start");
  };  
  
  

  return (
    <div className="imgUpload"><br /><br />
      {/* <h1 style={{color: "white"}}>Image Upload</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
          
            <input id="file"
              type="file"
              style={{visibility: "hidden"}}
              onChange={handleFileChange}
            />
            <label id="fileUpload" htmlFor="file" className="btn">{select}</label>
          </div>
          <div className="col">
            {/* <button className="submitBtn" style={{borderRadius: "20px", height: "50px", fontSize: "35px",  marginTop: "0px"}} type="submit">Upload</button> */}
            <button style={{ borderRadius: "20px", height: "50px", fontSize: "35px",  marginTop: "0px"}}
                  className={isActive ? "submitBtn" : "submitBtnDisable"}
                  disable
                  type="submit"
                >
                  {btntext}
                </button>
          </div>
          {twocols ? <div className="col">
              <output style={{color: "Black", backgroundColor: "white", width: "300px"}}>{output}</output>
          </div> : <div className="col" hidden>
              <output style={{color: "Black", backgroundColor: "white", width: "300px"}}>{output}</output>
          </div> }
          

        </div>
      </form>
      
    </div>
  );
}

export default App;