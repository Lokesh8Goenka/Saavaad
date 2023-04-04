import React, { useState } from "react";
import CountUp from "react-countup";
import W1 from "../poemImages/W1.png";
import W3 from "../poemImages/W3.png";
import W6 from "../poemImages/W6.png";
import W9 from "../poemImages/W9.png";

const headingStyle = {
  color: "#fff",
  fontFamily: "Shantell Sans, cursive",
  fontSize: "60px",
};

function Poems(props) {
  const [poem, setPoem] = useState("");
  const [inputText, setInputText] = useState("");
  const [inlength, setINlength] = useState(0);
  const [poster, setPoster] = useState(false);
  const [posterimg, setPosterimg] = useState(W1);
  const [disable, setdisable] = useState(false)
  const [warning, setWarning] = useState("Word Limit 125 words")

  // <a href="mailto:goenkalokesh@gmail.com"><i class="fas fa-envelope ftr-icon"></i></a>

  const handleSubmit = async (event) => {
    setPoem(inputText);
    setPoster(true);
    

    event.preventDefault();
  };

  const handleChange = (event) => {
    // setINlength(inputText.split(" ").length);
    if(event.target.value.length===10){ 
      window.alert("Word limit exceeded!");
      setdisable(true);
    }
  };

  return (
    <div className="summary" id="summary">
      <br /> <br />
      <h1 style={headingStyle}>{props.title}</h1>
      <p>{warning}</p>
      <div className="container">
        <div className="row">
          {/* FIRST COL (TEXT) */}
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="text-input"></label>
                  <textarea 
                    disabled={disable}
                    style={{ overflow: "scroll" }}
                    type="text"
                    cols="100"
                    rows="10"
                    id="text-input"
                    value={inputText}
                    onChange={handleChange}
                  />
                  
                </div>
                <div className="col">
                  <button className="submitBtn" style={{ width: "200px" }}>
                    Poem
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <div className="col">
            <h3 style={{ color: "white" }}>
              What Describes Your Poem's Theme The best
            </h3>
            <br />
            <div className="row">
              <div className="col">
                <button
                  onClick={setPosterimg(W1)}
                  className="poemTheme"
                  style={{ backgroundColor: "#55E6C1" }}
                >
                  Nature
                </button>
                <br /> <br />
                <button
                  onClick={setPosterimg(W3)}
                  className="poemTheme"
                  style={{ backgroundColor: "#EAB543" }}
                >
                  Happy
                </button>
                <br />
              </div>
              <div className="col">
                <button
                  onClick={setPosterimg(W6)}
                  className="poemTheme"
                  style={{ backgroundColor: "#F97F51" }}
                >
                  Motivating
                </button>
                <br />
                <br />
                <button
                  onClick={setPosterimg(W9)}
                  className="poemTheme"
                  style={{ backgroundColor: "#FC427B" }}
                >
                  Life Story
                </button>
                <br />
              </div>
            </div>
          </div> */}
        </div>
        {/* second row Images */}
        {/* <div className="row">
            <div className="col"><img className="carou_image" src={W1} alt="slide"/></div>
            <div className="col"><img className="carou_image" src={W3} alt="slide"/></div>
            <div className="col"><img className="carou_image" src={W6} alt="slide"/></div>
            <div className="col"><img className="carou_image" src={W9} alt="slide"/></div>
          </div> */}
        {/* third row poster */} <br />
        <br />
        {poster ? (
          <div className="row">
            <div className="poster">
              <img className="carou_image" src={posterimg} alt="poem_image" />
              <div className="centered">
                <pre>
                  <h6>{poem}</h6>
                </pre>
              </div>
            </div>
            <br />
            <br /> <br />
          </div>
        ) : null}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Poems;

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
