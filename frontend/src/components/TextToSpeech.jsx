import React, { useState } from "react";
import CountUp from "react-countup";
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import Mic from "../images/voice.png";

const headingStyle = {
  color: "#fff",
  fontFamily: "Shantell Sans, cursive",
  fontSize: "60px",
};

function Translate(props) {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [disable, setDisable] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [inlength, setINlength] = useState(0);
  const [outlength, setOutlength] = useState(0);
  const [resCount, setResCount] = useState(false);
  const [twocols, setTwoCols] = useState(false);
  const [audio, setAudio] = useState();


  const handleSubmit = async (event) => {
     event.preventDefault();
    setDisable(true);
    setIsActive(false);
    setINlength(inputText.split(" ").length);

   
    if (inputText) {
      const response = await fetch(
        "https://clickl.serveo.net/text_audio",
        // "http://192.168.34.133:12345/text_audio",
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
      // const result = ;
      console.log("Audio");
      // console.log(typeof(result));
      const url = URL.createObjectURL(await response.blob());
      setAudio(url)
      setTwoCols(true);
      setResCount(true);
      setDisable(false);
      setIsActive(true);
    }
};

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="summary" id="summary">
      {/* <h1 style={headingStyle}>{props.title}</h1> */}
        <div className="container">
        <br />
          <div style={{backgroundColor: "white", borderRadius: "20px"}}>
            <br />
          <h2 id="heading">Text To Speech</h2>
          <hr style={{color:"#5D9C59", width: "100%"}} />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="text-input"></label>
                <textarea
                  className="scroll"
                  style={{ overflow: "scroll" }}
                  type="text"
                  cols="100"
                  rows="10"
                  id="text-input"
                  value={inputText}
                  onChange={handleChange}
                />
                <h5 style={{ color: "#fff" }}>
                  Total Words:
                  <CountUp start={0} end={inlength} duration={3} />
                </h5>
              </div>
              <div className="col" style={{
                        textAlign:"center"
                      }}>

                <ReactAudioPlayer
                  id="Mic"
                  style={{visibility: "hidden"}}
                  src={audio}
                  autoPlay
                  controls
                />
                <label htmlFor="Mic"><img  height="50px" src={Mic} alt="Mic" /></label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className={isActive ? "submitBtn" : "submitBtnDisable"}
                  disable
                  type="submit"
                >
                  Audio
                </button>
                <br />
                <br />
              </div>
            </div>
          </form>
          </div>          
        </div>
    </div>
  );
}

export default Translate;
