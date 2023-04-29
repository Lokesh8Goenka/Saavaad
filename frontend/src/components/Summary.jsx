import React, { useState } from "react";
import copy from "copy-to-clipboard";
import UploadImg from "./UploadImg";
import Modal from "react-bootstrap/Modal";
import CountUp from "react-countup";
import ReactAudioPlayer from "react-audio-player";
import Mic from "../images/voice.png";
import SummaryImg from "../images/clickl_summary.png";
import FileUpload from "../images/fileUpload.png";
import writing from "../images/creative-writing.png";
import agreement from "../images/agreement.png";

const headingStyle = {
  color: "#ffff",
  fontFamily: "Shantell Sans, cursive",
  fontSize: "60px",
};

function Summary(props) {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [result2Text, setResult2Text] = useState("");
  const [disable, setDisable] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [btntext, setBtntext] = useState("Start");
  const [inlength, setINlength] = useState(0);
  const [outlength, setOutlength] = useState(0);
  const [resCount, setResCount] = useState(false);
  const [twocols, setTwoCols] = useState(false);
  const [audio, setAudio] = useState();
  const [typedtext, setTypedText] = useState(false);
  const [others, setOthers] = useState(false);
  const [showaudio, setshowaudio] = useState(false);
  const [showtranslate, setShowTranslate] = useState(false);
  const [out, setOut] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [copyText, setCopyText] = useState("");

  function showTypedText() {
    setTypedText(!typedtext);
  }

  function handleOut(event) {
    setOut(event.target.value);
  }

  const handleSumTrans = async (event) => {
    setDisable(true);
    setIsActive(false);
    setBtntext("Processing");
    setINlength(resultText.split(" ").length);

    // const Src = src;
    // console.log(Src);
    // const end = "en";
    event.preventDefault();
    const end = out;
    if (inputText) {
      const response = await fetch(
        "https://saavaad.serveo.net/translate_en_"+ end,
        // "http://192.168.34.133:12345/translate_hi_en",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: resultText,
          }),
        }
      );
      const result2Text = await response.json();
      setTwoCols(true);
      setResult2Text(JSON.stringify(result2Text));
      setOutlength(result2Text.split(" ").length);
      setResCount(true);
      setDisable(false);
      setIsActive(true);
      setBtntext("Start");
    }
  };

  const handleSumAudio = async (event) => {
    event.preventDefault();
    setOthers(true);
    setDisable(true);
    setIsActive(false);
    setINlength(resultText.split(" ").length);

    if (inputText) {
      const response = await fetch(
        "https://saavaad.serveo.net/text_audio",
        // "http://192.168.34.133:12345/text_audio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: resultText,
          }),
        }
      );
      // const result = ;
      console.log("Audio");
      // console.log(typeof(result));
      const url = URL.createObjectURL(await response.blob());
      setAudio(url);
      setTwoCols(true);
      setResCount(true);
      setDisable(false);
      setIsActive(true);
    }
  };

  const handleSubmit = async (event) => {
    setOthers(false);
    setDisable(true);
    setIsActive(false);
    setBtntext("Processing");
    setINlength(inputText.split(" ").length);

    event.preventDefault();
    if (inputText) {
      const response = await fetch(
        "https://saavaad.serveo.net/text_summarize",
        //"http://192.168.34.133:12345/text_summarize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: inputText,
          }),
        }
      );
      const resultText = await response.json();
      setTwoCols(true);
      setResultText(JSON.stringify(resultText));
      setOutlength(resultText.split(" ").length);
      setCopyText(resultText);
      setResCount(true);
      setDisable(false);
      setIsActive(true);
      setBtntext("Start");
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText);
    alert(`You have copied "${copyText}"`);
  };

  function showAudio() {
    setShowTranslate(false);
    setshowaudio(true);
  }

  function showTranslate() {
    setshowaudio(false);
    setShowTranslate(true);
  }
  // const [hover, setHover] = useState(false);

  // function hoverON() {
  //   setHover(true);
  // }
  // function hoverOff() {
  //   setHover(false);
  // }

  return (
    <div className="summary" id="summary">
      {/* <h1 style={headingStyle}>{props.title}</h1> */}
      <div className="container">
        {/* <div> */}
        {/* <UploadImg /> <br /> */}
        {/* <br /> */}
        {/* </div> */}

        {/* <h1 id="customText"   
          // style={{ color: hover ? "cd34b9" : "13183e" }}
          // onMouseOver={hoverON}
          // onMouseOut={hoverOff}
          // onClick={showTypedText}
          // >Custom Text</h1>*/}

        <br />
        <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
          {/* <br /> */}
          <div id="headingTools">
            <h2 id="heading" style={{ color: "white" }}>
              Summarizer
            </h2>
          </div>
          {/* <img height="50px" src={agreement} alt="decoration" /> */}

          {/* <img height="50px" src={writing} alt="decoration" /> */}
          {/* <hr style={{color:"#5D9C59", width: "100%"}} /> */}
          <form 
          // onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-auto">
                <label htmlFor="text-input"></label>

                <textarea
                  className="scroll"
                  style={{ overflow: "scroll" }}
                  type="text"
                  cols="80"
                  rows="10"
                  id="text-input"
                  value={inputText}
                  onChange={handleChange}
                />

                <h5 style={{ color: "#609966" }}>
                  Total Words:
                  <CountUp start={0} end={inlength} duration={3} />
                </h5>
              </div>

              <div className="col-md-auto">
                <output
                  style={{
                    color: "Black",
                    backgroundColor: "white",
                    minWidth: "400px",
                    maxWidth: "400px",
                    height: "260px",
                    border: "1px solid #95BDFF",
                    borderRadius: "10px",
                  }}
                >
                  {resultText}
                </output>
                {resCount ? (
                  <div>
                    <br />
                    <div id="copyRes" onClick={copyToClipboard}>
                      Copy
                    </div>
                    <h5 style={{ color: "#0093E9" }}>
                      Total Words:
                      <CountUp start={0} end={outlength} duration={3} />
                    </h5>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row">
              {/* <div className="col-md-auto">
                <img id="fileUplaodImg" onClick={handleShow} src={FileUpload} alt="fileupload" />
              </div> */}
              <div className="col">
                <button
                  className={isActive ? "submitBtn" : "submitBtnDisable"}
                  disabled={disable}
                  type="submit"
                  onClick={handleSubmit}
                >
                  {btntext} {/* Start */}
                </button>
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col pipeline1" onClick={showAudio}><h3>Lazy to read, Try Audio!</h3></div>
              <div className="col pipeline1" onClick={showTranslate}><h3>Want in another language?</h3></div>
            </div>

            {showaudio ? (
              <div className="row">
              <div className="col-md">
                <button
                  className={isActive ? "submitBtn" : "submitBtnDisable"}
                  disabled={disable}
                  type="submit"
                  style={{ fontSize: "25px" }}
                  onClick={handleSumAudio}
                >
                  Audio
                </button>
                <br />
                <br />
              </div>
              <div
                className="col-md"
                style={{
                  textAlign: "right",
                }}
              >
                <ReactAudioPlayer
                  id="Mic"
                  style={{ color: "#08AEEA" }}
                  src={audio}
                  autoPlay
                  controls
                />
                {/* <label htmlFor="Mic"><img height="50px" src={Mic} alt="Mic" /></label> */}
              </div>
            </div>
            ) : null}

            {showtranslate ? (
                <div className="row">
                  <div className="col-md">
                  <select
                    style={{ width: "200px", color: "#0093E9" }}
                    className="form-select col-md-2"
                    aria-label="Default select example"
                    // value={frm}
                    onChange={handleOut}
                  >
                    <option defaultValue>To: </option>
                    <option value="hi">Hindi</option>
                    <option value="ml">Malayalam</option>
                    <option value="bn">Bengali</option>
                    <option value="mr">Marathi</option>
                    <option value="ur">Urdu</option>
                  </select>{" "}
                    <button
                      className={isActive ? "submitBtn" : "submitBtnDisable"}
                      disabled={disable}
                      type="submit"
                      style={{ fontSize: "25px" }}
                      onClick={handleSumTrans}
                    >
                      Translate
                    </button>
                    <br />
                    <br />
                  </div>
                  <div className="col-md">
                    <output
                      style={{
                        color: "Black",
                        backgroundColor: "white",
                        border: "1px solid #95BDFF",
                        borderRadius: "10px",
                        width: "300px",
                        height: "260px",
                      }}
                    >
                      {result2Text}
                      <div id="copyRes" onClick={copyToClipboard}>
                        Copy
                      </div>
                    </output>
                  </div>
                </div>
            ) : null}
          </form>
        </div>
      </div>
      <br />
      {/* <UploadImg show={show} onHide={handleClose} /> */}
    </div>
  );
}

export default Summary;

// On Monday, Congress' former Lok Sabha MP Rahul Gandhi arrived Gujarat's Surat where he filed an appeal in a sessions court against a lower court order that found him guilty of criminal defamation for his ‘all thieves have Modi surname’ remark. The court accepted his petition and posted it for hearing on April 13. On March 24, barely twenty-four hours after a lower court in the city found Gandhi guilty of defaming the entire Modi community in a case filed by BJP MLA Purnesh Modi, the ex-Congress president was disqualified from Lok Sabha under a rule which bars convicted MPs from holding Lok Sabha membership.
