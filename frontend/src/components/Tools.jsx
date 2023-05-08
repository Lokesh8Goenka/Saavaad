import React, { useState } from "react";

// import Sidebar from "./Sidebar.jsx";
import Process from "./Process.jsx";
import Summary from "./Summary.jsx";
import Translate from "./Translate.jsx";
import TextToSpeech from "./TextToSpeech.jsx";
import Clickl from "../images/clickl_main.png";
import UploadImg from "./UploadImg.jsx";
import summary from "../images/agreement.png";
import TexToSpeech from "../images/text-to-speech.png";
import Translation from "../images/languages.png";
import File from "../images/file.png";

function Tools() {
  const [ftitle, setFTitle] = useState("");
  const [val, setValue] = useState("");
  const [list, setList] = useState(false);

  const toolstyle = {
 
    // Adding media query..
    '@media (maxWidth: 500px)': {
      flex: '0 0 auto',
      width: 'auto'
    },
  };


  function handleClick(e) {
    console.log(e.target);
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleClickIMG(event) {
    console.log(event.target);
    console.log(event.target.alt);

    // console.log(typeof(event.target.value));
    setValue(event.target.alt);
  }

  function onHover() {
    setList(true);
  }
  function offHover() {
    setList(false);
  }

  return (
    <div className="Tools" id="tools" style={{ height: "auto" }}>
      {/* <h1>Tools</h1> */}
      <div className="row">
        <div className="col-md-auto toolList" style={toolstyle}>
          {/* <Sidebar /> */}
          <ul className="tList" onMouseOver={onHover} onMouseOut={offHover}>
            {/* <p> *click on the image</p> */}
            <li value="1" className="row">
              <img
                onClick={handleClickIMG}
                src={summary}
                alt="1"
                className="col-md-auto"
                height="50px"
              />
              <p
                value="1"
                className={list ? "col toolTitle" : "col toolTitleCollapsed"}
              >
                Summary
              </p>
            </li>
            <li value="2" className="row">
              <img
                onClick={handleClickIMG}
                value="2"
                src={Translation}
                alt="2"
                className="col-md-auto"
                height="50px"
              />
              <p
                value="2"
                className={list ? "col toolTitle" : "col toolTitleCollapsed"}
              >
                Translation
              </p>
            </li>
            <li value="3" className="row">
              <img
                onClick={handleClickIMG}
                value="3"
                src={TexToSpeech}
                alt="3"
                className="col-md-auto"
                height="50px"
              />
              <p
                value="3"
                className={list ? "col toolTitle" : "col toolTitleCollapsed"}
              >
                Text To Speech
              </p>
            </li>
            <li value="4" className="row">
              <img
                onClick={handleClickIMG}
                value="4"
                src={File}
                alt="4"
                className="col-md-auto"
                height="50px"
              />
              <p
                value="4"
                className={list ? "col toolTitle" : "col toolTitleCollapsed"}
              >
                Image Summary
              </p>
            </li>
          </ul>
        </div>

        <div className="col container">
          {
            val === "1" ? (
              <Summary title={"Summary"} />
            ) : val === "2" ? (
              <Translate title={"Translation"} />
            ) : val === "3" ? (
              <TextToSpeech title={"Text To Speech"} />
            ) : val === "4" ? (
              <UploadImg title={"Image Summarizer"} />
            ) : (
              <div className="container">
                <img src={Clickl} alt="Summary" width="85%" />
              </div>
            )

            // null
          }
        </div>
      </div>
    </div>
  );
}

export default Tools;
