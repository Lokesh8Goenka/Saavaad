import React, { useState } from "react";
import FileUpload from "../images/fileUpload.png";

function App() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState("");
  const [select, setSelect] = useState("Upload File");
  const [btntext, setBtntext] = useState("Go");
  const [isActive, setIsActive] = useState(true);
  const [twocols, setTwoCols] = useState(false);
  const [type, setType] = useState("");
  const [src, setSrc] = useState("");
  const fileStyle = {
    marginLeft: "70px",
    width: "200px",
    height: "50px",
    color: "#0093E9",
    backgroundColor: "white",
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setSelect("Image Selected");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsActive(false);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("file", file);

    fetch(
      "https://saavaad.serveo.net/" + type + "_text_summarize",
      // 'http://172.28.0.12:12345/image_text_summarize',
      {
        method: "POST",
        mode: "cors",
        body: formData,
      }
    )
    .then((response) => response.json())
    .then((data) => setOutput(data))
    .catch((error) => console.log(error));

    setTwoCols(true)
    setIsActive(true);
    setBtntext("Go");
  };

  const handleType = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
    // console.log(src);
  };

  return (
    <div className="imgUpload">
      {/* <h1 style={{color: "white"}}>Image Upload</h1> */}
      <div className="container">
        <br />
        <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
          <br />
          <h2 id="heading">Image Summarisation</h2>
          <hr style={{ color: "#5D9C59", width: "100%" }} />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div
                className="col"
                style={{
                  textAlign: "centre",
                }}
              >
                <input
                  id="file"
                  type="file"
                  style={{ visibility: "hidden" }}
                  onChange={handleFileChange}
                />
                <label htmlFor="file">
                  <img height="200px" src={FileUpload} alt="Upload file" />
                </label>
              </div>
              <div className="col">
                <select
                  style={fileStyle}
                  className="form-select"
                  aria-label="Default select example"
                  // value={frm}
                  onChange={handleType}
                >
                  <option defaultValue>File Type </option>
                  <option value="printed_pdf">Pdf</option>
                  <option value="image">Png/JPG</option>
                  <option value="hw_image">PNG/JPG (Handwritten)</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{
                  textAlign: "center",
                }}
              >
                {/* <button className="submitBtn" style={{borderRadius: "20px", height: "50px", fontSize: "35px",  marginTop: "0px"}} type="submit">Upload</button> */}
                <button
                  // style={{ borderRadius: "15px", height: "50px", fontSize: "22px",  marginTop: "0px"}}
                  className={isActive ? "submitBtn" : "submitBtnDisable"}
                  id="gobtn"
                  disable
                  type="submit"
                >
                  {btntext}
                </button>
              </div>
              {twocols ? (
                <div className="col">
                  <output
                    style={{
                      color: "Black",
                      backgroundColor: "white",
                      width: "300px",
                      boderColor: "solid 0.5px #26cef7",
                    }}
                  >
                    {output}
                  </output>
                </div>
              ) : (
                <div className="col" hidden>
                  <output
                    style={{
                      color: "Black",
                      backgroundColor: "white",
                      width: "300px",
                      boderColor: "solid 0.5px #26cef7",
                    }}
                  >
                    {output}
                  </output>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
