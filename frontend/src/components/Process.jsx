import React, { useState } from "react";
import { Link } from "react-scroll";
import Poem from "./Poem";
import Contact from "./Contact.jsx";
import Summary from "./Summary.jsx";
import Translate from "./Translate.jsx";
import TextToSpeech from "./TextToSpeech.jsx";

function Process(props) {
  return (
    <div className="Process" id="process">
      {props.title === "Summary" ? (
        <Summary title={props.title} />
      ) : props.title === "More" ? (
        <Contact />
      ) : props.title === "Translation" ? (
        <Translate title={props.title} />
      ) : props.title === "Text To Audio" ? (
        <TextToSpeech title={props.title} />
      ) : props.title === "Poem" ? (
        <Poem title={props.title} />
      ) : null}
    </div>
  );
}

export default Process;
