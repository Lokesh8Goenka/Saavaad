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


  const handleSubmit = async (event) => {
    setDisable(true);
    setIsActive(false);
    setBtntext("Processing");
    setINlength(inputText.split(" ").length);

    event.preventDefault();
    if (inputText) {
      const response = await fetch(
        "http://192.168.34.133:12345/translate_hi_en",
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

              {twocols ? (
                <div className="col">
                  <output
                    style={{
                      color: "Black",
                      backgroundColor: "white",
                      width: "300px",
                      height: "260px"
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
                      height: "260px"
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
  );
}

export default Translate;
