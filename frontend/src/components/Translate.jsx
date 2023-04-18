import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ReactAudioPlayer from "react-audio-player";
import $ from "jquery"

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
  const [btntext, setBtntext] = useState("Translate");
  const [inlength, setINlength] = useState(0);
  const [outlength, setOutlength] = useState(0);
  const [resCount, setResCount] = useState(false);
  const [twocols, setTwoCols] = useState(false);
  const [src, setSrc] = useState("");
  const [out, setOut] = useState("");
  const [audio, setAudio] = useState();
  const [showaudio, setshowaudio] = useState(false);
  const [showsummary, setShowSummary] = useState(false);
  const [dis, setDis] = useState();
  const [srcName, setSrcName] = useState("");
  const [langs, setLangs] = useState([]);
  const [langName, setLangName] =useState("");
  // let dis = "";
  useEffect(() => {
    if (langs.length === 0) {
      setLangs(["en", "hi", "ml", "bn", "mr", "ur"]);
    }
  }, []);
  const handleSubmit = async (event) => {
    setDisable(true);
    setIsActive(false);
    setBtntext("Processing");
    setINlength(inputText.split(" ").length);

    const Src = src;
    // console.log(Src);
    const end = out;
    if (Src === end) {
      alert("Both Source s=and result language is same!");
    }
    event.preventDefault();

    if (inputText) {
      const response = await fetch(
        "https://clickl.serveo.net/translate_" + Src + "_" + end,
        // "http://192.168.34.133:12345/translate_hi_en",
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
      setResCount(true);
      setDisable(false);
      setIsActive(true);
      setBtntext("Start");
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSrc = (event) => {
    // console.log(event.target.value);
    setSrc(event.target.value);
    const option = $("#"+event.target.value)
    // console.log(option[0].innerHTML);
    setLangName(option[0].innerHTML);
    // console.log(event.target);
    
    setSrcName(event.target.innerhtml);
    // setDis(event.target.value);
    // dis = event.target.value;
    //setDis(src);
    console.log(dis);
    // {src}
    // console.log(src);
  };
  const handleOut = (event) => {
    // if (event.target.value)
    setOut(event.target.value);
  };

  function showAudio() {
    setShowSummary(false);
    setshowaudio(true);
  }

  function showSummary() {
    setshowaudio(false);
    setShowSummary(true);
  }

  const handleSumAudio = async (event) => {
    event.preventDefault();
    setDisable(true);
    setIsActive(false);
    setINlength(resultText.split(" ").length);

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
  console.log(langName);
  // console.log(srcName);

  // console.log(src, dis);
  return (
    <div className="summary" id="summary">
      {/* <h1 style={headingStyle}>{props.title}</h1> */}
      <div className="container">
        {/* <br /> */}
        <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
          {/* <br /> */}
          <h2 id="heading">Translation</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <select
                style={{ width: "200px", color: "#0093E9" }}
                className="form-select col-md-2"
                aria-label="Default select example"
                // value={frm}
                onChange={handleSrc}
              >
                <option defaultValue>From: </option>
                <option value="en" id="en" >English</option>
                <option value="hi" id="hi">Hindi</option>
                <option value="ml" id="ml">Malayalam</option>
                <option value="bn" id="bn">Bengali</option>
                <option value="mr" id="mr">Marathi</option>
                <option value="ur" id="ur">Urdu</option>
              </select>
              <br />
              <select
                id="out"
                style={{ width: "200px", color: "#0093E9" }}
                className="form-select col-md-2"
                aria-label="Default select example"
                // value={frm}
                onChange={handleOut}
              >
                {/* yahape map[ krenge] hide the other one */} 
                {langs.length ? (
                  langs.map((lang) => {
                    return (
                      <>
                      {/* <option defaultValue>To: </option> */}
                        {lang === src ? (
                          <></>
                        ) : (
                          <option value={lang}>{lang}</option>
                        )}
                      </>
                    );
                  })
                ) : (
                  <></>
                )}

                {/* <option defaultValue>To: </option>
                <option
                  //  {src === "en" ? disabled: null}
                  disabled
                  value="en"
                >
                  English
                </option>
                {dis === "hi" ? (
                  <option disabled value="hi">
                    Hindi
                  </option>
                ) : (
                  <option value="hi">Hindi</option>
                )}

                <option value="ml">Malayalam</option>
                <option value="bn">Bengali</option>
                <option value="mr">Marathi</option>
                <option value="ur">Urdu</option> */}
              </select>{" "}
            </div>

            <br />
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
                <h5 style={{ color: "#609966" }}>
                  Total Words:
                  <CountUp start={0} end={inlength} duration={3} />
                </h5>
              </div>

              {twocols ? (
                <div className="col">
                  <output
                    style={{
                      color: "Black",
                      backgroundColor: "white",
                      width: "300px",
                      height: "260px",
                    }}
                  >
                    {resultText}
                  </output>
                  {resCount ? (
                    <h5 style={{ color: "#fff" }}>
                      Total Words:
                      <CountUp start={0} end={outlength} duration={3} />
                    </h5>
                  ) : null}
                </div>
              ) : (
                <div className="col" hidden>
                  <output
                    style={{
                      color: "Black",
                      backgroundColor: "white",
                      width: "300px",
                      height: "260px",
                    }}
                  >
                    {resultText}
                  </output>
                  {resCount ? (
                    <h5 style={{ color: "#fff" }}>
                      Total Words:
                      <CountUp start={0} end={outlength} duration={3} />
                    </h5>
                  ) : null}
                </div>
              )}
            </div>
            <div className="row">
              <div className="col">
                <button
                  className={isActive ? "submitBtn" : "submitBtnDisable"}
                  disable
                  type="submit"
                >
                  {btntext}
                </button>
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col pipeline1" onClick={showAudio}>
                <h3>Lazy to read, Hear it!</h3>
              </div>
              <div className="col pipeline1" onClick={showSummary}>
                <h3>Want in another language?</h3>
              </div>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Translate;
