import React, { useState } from "react";
import CountUp from "react-countup";


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

  const handleSubmit = async (event) => {
    setDisable(true);
    setIsActive(false);
    setBtntext("Processing");
    setINlength(inputText.split(" ").length);

    const Src = src;
    // console.log(Src);
    const end = "en";
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
    // console.log(src);
  };

  return (
    <div className="summary" id="summary">
      {/* <h1 style={headingStyle}>{props.title}</h1> */}
      <div className="container">
        <br />
        <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
          <br />
          <h2 id="heading">Translation</h2>
          <hr style={{ color: "#5D9C59", width: "100%" }} />
          <form onSubmit={handleSubmit}>
            <select
              style={{ width: "200px", color: "#0093E9" }}
              className="form-select"
              aria-label="Default select example"
              // value={frm}
              onChange={handleSrc}
            >
              <option defaultValue>From: </option>
              <option value="hi">Hindi</option>
              <option value="ml">Malayalam</option>
              <option value="bn">Bengali</option>
            </select>{" "}
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Translate;
