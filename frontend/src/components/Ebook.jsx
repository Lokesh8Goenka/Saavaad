import React, { useState, useRef } from "react";
import CountUp from "react-countup";
import * as htmlToImage from "html-to-image";
import W1 from "../poem_images/Happy1.jpg";
import W9 from "../poem_images/Life.png";
import W6 from "../poem_images/Motivating.jpg";
import W3 from "../poemImages/W1.png";

const headingStyle = {
  color: "#fff",
  fontFamily: "Shantell Sans, cursive",
  fontSize: "60px",
};

function Ebook(props) {
  const [inputText, setInputText] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [inlength, setINlength] = useState(0);
    
  // <a href="mailto:goenkalokesh@gmail.com"><i class="fas fa-envelope ftr-icon"></i></a>

  const handleSubmit = async (event) => {
    setINlength(inputText.split(" ").length);
    event.preventDefault();
    setIsActive(false);
    // console.log(inputText);
    setIsActive(true);
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
                maxLength="690"
                value={inputText}
                onChange={handleChange}
              />
              <h5 style={{ color: "#fff" }}>
                Total Words:
                <CountUp start={0} end={inlength} duration={3} />
              </h5>
            </div>
            
          </div>
          <div className="row">
            <div className="col">
              <button
                className={isActive ? "submitBtn" : "submitBtnDisable"}
                disable
                type="submit"
              >
                Ebook
              </button>
              <br />
              <br />
            </div>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Ebook;
