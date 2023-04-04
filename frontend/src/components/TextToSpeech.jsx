import React, { useState } from "react";
import useSound from 'use-sound';
import CountUp from "react-countup";

const headingStyle = {
  color: "#fff",
  fontFamily: "Shantell Sans, cursive",
  fontSize: "60px",
};

function TextToSpeech(props) {
  const [inputText, setInputText] = useState("");
  const [audioURI, setAudioURI] = useState("");
  // const [disable, setDisable] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [btntext, setBtntext] = useState("Audio");
  const [inlength, setINlength] = useState(0);
  const [outlength, setOutlength] = useState(0);
  const [resCount, setResCount] = useState(false);
  const [twocols, setTwoCols] = useState(false);


  const handleSubmit = async (event) => {
    // setDisable(true);
    setIsActive(false);
    setBtntext("Processing");
    setINlength(inputText.split(" ").length);

    event.preventDefault();
    if (inputText) {
      const response = await fetch(
        "http://3543-104-154-158-197.ngrok.io/text_audio",
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
      setTwoCols(true);
      const audioUrl = await response.json();
      setAudioURI(audioUrl);

      // console.log(audioUrl);
      setResCount(true);
      setIsActive(true);
      setBtntext("Start");
    }
};

  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const [playSound] = useSound(audioURI);

  return (
    <div className="summary" id="summary">
      <br />
      <br />
      <h1 style={headingStyle}>{props.title}</h1>
        <div className="container">

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="text-input"></label>
                <textarea
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
              <div className="col" >
                <button onClick={() => playSound()}>
                Play 
                </button>
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
  );
}

export default TextToSpeech;
