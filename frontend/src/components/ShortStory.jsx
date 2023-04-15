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

function ShortStory(props) {
  const [poem, setPoem] = useState("");
  const [inputText, setInputText] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [inlength, setINlength] = useState(0);
  const [poster, setPoster] = useState(false);
  const [posterimg, setPosterimg] = useState("");

  // <a href="mailto:goenkalokesh@gmail.com"><i class="fas fa-envelope ftr-icon"></i></a>

  const handleSubmit = async (event) => {
    setINlength(inputText.split(" ").length);
    event.preventDefault();
    setIsActive(false);
    setPoem(inputText);
    // console.log(inputText);
    setPoster(true);
    setIsActive(true);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement("a");
    link.download = "Poem.png";
    link.href = dataUrl;
    link.click();
  };

  function handleHappy(){
    setPosterimg("happy");
  }

  function handleLife(){
    setPosterimg("life");
  }

  function handleNature(){
    setPosterimg("nature");
  }

  function handleMotiv(){
    setPosterimg("motivation");
  }


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
            {/* <div className="col">
              <h3 id="poemTheme">What Describes Your Poem's Theme The best ?</h3>
              <br />
              <ul>
                <li
                  onClick={handleHappy}
                  style={{ backgroundColor: "#f1c40f" }}
                >
                  Happy
                </li>
                <br />
                <li
                  onClick={handleNature}
                  style={{ backgroundColor: "#27ae60" }}
                >
                  Nature
                </li>
                <br />
                <li
                  onClick={handleLife}
                  style={{ backgroundColor: "#3498db" }}
                >
                  Life
                </li>
                <br />
                <li
                  onClick={handleMotiv}
                  style={{ backgroundColor: "#e84118" }}
                >
                  Motivation
                </li>
                <br />
              </ul>
            </div> */}
          </div>
          <div className="row">
            <div className="col">
              <button
                className={isActive ? "submitBtn" : "submitBtnDisable"}
                disable
                type="submit"
              >
                Story
              </button>
              <br />
              <br />
            </div>
          </div>
        </form>
        <br />
        {poster ? (
          <div className="row">
            <div className="poster" ref={domEl}>
              <img
                className="carou_image"
                src={
                  posterimg === "happy"
                    ? W1
                    : posterimg === "nature"
                    ? W3
                    : posterimg === "life"
                    ? W6
                    : posterimg === "motivation"
                    ? W9
                    : null
                }
                alt="poem_image"
              />
              <div className="centered">
                <pre>
                  <h6>{poem}</h6>
                </pre>
              </div>
            </div>
            <br />
            <br /> <br />
            <button id="poemDownload" className="submitBtn" onClick={downloadImage}>download</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ShortStory;

// To a Butterfly
// I’ve watched you now a full half-hour,
// Self-poised upon that yellow flower;
// And, little Butterfly! Indeed
// I know not if you sleep or feed.
// How motionless! – not frozen seas
// More motionless! And then
// What joy awaits you, when the breeze
// Hath found you out among the trees,
// And calls you forth again!
// This plot of orchard-ground is ours;
// My trees they are, my Sister’s flowers.
// Here rest your wings when they are weary;
// Here lodge as in a sanctuary!
// Come often to us, fear no wrong
// Sit near us on the bough!
// We’ll talk of sunshine and of song,
// And summer days when we were young;
// Sweet childish days, that were as long
// As twenty days are now.
// William Wordsworth
